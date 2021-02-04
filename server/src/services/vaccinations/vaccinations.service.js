// Initializes the `vaccinations` service on path `/vaccinations`
const { Vaccinations } = require('./vaccinations.class');
const createModel = require('../../models/vaccinations.model');
const hooks = require('./vaccinations.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/vaccinations', new Vaccinations(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('vaccinations');

  service.hooks(hooks);
};
