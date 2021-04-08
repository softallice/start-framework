import feathers from "@feathersjs/feathers";
import rest from "@feathersjs/rest-client";
import auth from "@feathersjs/authentication-client";
import { iff, discard } from "feathers-hooks-common";
import feathersVuex from "feathers-vuex";
import axiosInstance from "./axios";
import Vue from "vue";

import io from 'socket.io-client'
import socketio from '@feathersjs/socketio-client'

const restClient = rest("http://localhost:3030");
// const restClient = rest("http://172.27.42.206:3030");
// const restClient = rest("http://172.27.42.206:3030");
// const restClient = rest("https://server.softmagic.local");
const socket = io('http://172.27.42.206:3030', { transports: ['websocket'] })

const feathersClient = feathers()
  // .configure(restClient.axios(axiosInstance))
  .configure(socketio(socket))
  .configure(auth({ storage: window.localStorage }))
  .hooks({
    before: {
      all: [
        iff(
          context => ["create", "update", "patch"].includes(context.method),
          discard("__id", "__isTemp")
        )
      ]
    }
  });

Vue.prototype.$feathersClient = feathersClient;

export default feathersClient;

// Setting up feathers-vuex
const {
  makeServicePlugin,
  makeAuthPlugin,
  BaseModel,
  models,
  FeathersVuex
} = feathersVuex(feathersClient, {
  serverAlias: "api", // optional for working with multiple APIs (this is the default value)
  idField: "_id", // Must match the id field in your database table/collection
  whitelist: ["$regex", "$options"]
});

export { makeAuthPlugin, makeServicePlugin, BaseModel, models, FeathersVuex };
