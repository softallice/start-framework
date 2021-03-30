// Initializes the `agree-terms` service on path `/agree-terms`
const { AgreeTerms } = require('./agree-terms.class');
const createModel = require('../../models/agree-terms.model');
const hooks = require('./agree-terms.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/agree-terms', new AgreeTerms(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('agree-terms');

  service.hooks(hooks);
};
