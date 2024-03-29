const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const helmet = require('helmet');
const cors = require('cors');
const logger = require('./logger');

const dotenv= require('dotenv');

dotenv.config();

const feathers = require('@feathersjs/feathers');
const configuration = require('@feathersjs/configuration');
const express = require('@feathersjs/express');
const socketio = require('@feathersjs/socketio');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');
const channels = require('./channels');

const authentication = require('./authentication');

const mongoose = require('./mongoose');

const sequelize = require('./sequelize');

const app = express(feathers());

// Load app configuration
app.configure(configuration());
// Enable security, CORS, compression, favicon and body parsing
const whitelist = [app.get('client_url')] || [process.env.client_url] ;

// const whitelist = ['http:localhost:3030','http://172.27.42.206:8085','https://172.27.42.206', 'https://172.27.42.206:3030']//, 'http://localhost:8085','http://localhost:8080', 'http://172.27.42.184:8085','http://localhost:8200', 'http://172.27.42.206:8085'];

console.log('whitelist : ', whitelist);
const corsOptions = {
  origin: (origin, callback) => {
    // if (whitelist.indexOf(origin) !== -1) { 
    if (!origin || whitelist.indexOf(origin) !== -1) { //test
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS: ' + origin));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  preflightContinue: false,
  optionsSuccessStatus: 204,
};
app.use(helmet());
app.options('*', cors(corsOptions));
app.use(cors(corsOptions));


app.use(compress());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(favicon(path.join(app.get('public'), 'favicon.ico')));
// Host the public folder
app.use('/', express.static(app.get('public')));

// Set up Plugins and providers
app.configure(express.rest());
app.configure(socketio());

app.configure(mongoose);


//sequelize add 
app.configure(sequelize);

// Configure other middleware (see `middleware/index.js`)
app.configure(middleware);
app.configure(authentication);
// Set up our services (see `services/index.js`)
app.configure(services);
// Set up event channels (see channels.js)
app.configure(channels);

// Configure a middleware for 404s and the error handler
app.use(express.notFound());
app.use(express.errorHandler({ logger }));

app.hooks(appHooks);

module.exports = app;
