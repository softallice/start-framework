// /* eslint-disable no-console */
// const logger = require('./logger');
// const app = require('./app');
// const port = app.get('port');
// const server = app.listen(port);

// process.on('unhandledRejection', (reason, p) =>
//   logger.error('Unhandled Rejection at: Promise ', p, reason)
// );

// server.on('listening', () =>
//   logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
// );
/* eslint-disable no-console */
const path = require('path');
const https = require('https');
const fs = require('fs');

const logger = require('./logger');
const app = require('./app');
const port = app.get('port');



const useSSL = app.get('ssl');
var server = null;

if(useSSL){
  // set up server with ssl (https)
  const certDirPath = path.join(__dirname, '..', '..', '..', 'server', 'config', 'cert'); 

  server = https.createServer({
    key: fs.readFileSync(path.normalize(certDirPath + path.sep + 'softmagic-dev-ca.key')),
    cert: fs.readFileSync(path.normalize(certDirPath + path.sep + 'softmagic-dev-ca.crt'))
  }, app).listen(port);
}else{
  // set up server without ssl (http)
  server = http.createServer(app).listen(port);
}

app.setup(server);


process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info('Feathers application started on http://%s:%d', app.get('host'), port)
);
