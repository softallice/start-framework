// Initializes the `user-agrees` service on path `/user-agrees`
const { UserAgrees } = require('./user-agrees.class');
const createModel = require('../../models/user-agrees.model');
const hooks = require('./user-agrees.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/user-agrees', new UserAgrees(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('user-agrees');

  service.hooks(hooks);
};
