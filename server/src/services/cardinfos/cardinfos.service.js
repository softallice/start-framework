// Initializes the `cardinfos` service on path `/cardinfos`
const { Cardinfos } = require('./cardinfos.class');
const createModel = require('../../models/cardinfos.model');
const hooks = require('./cardinfos.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/cardinfos', new Cardinfos(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('cardinfos');

  service.hooks(hooks);
};
