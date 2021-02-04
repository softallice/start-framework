const users = require('./users/users.service.js');
const email = require('./email/email.service.js');
const authManagement = require('./auth-management/auth-management.service.js');
const account = require('./account/account.service.js');
const products = require('./products/products.service.js');
const activities = require('./activities/activities.service.js');
const contacts = require('./contacts/contacts.service.js');
const cardinfos = require('./cardinfos/cardinfos.service.js');
const vaccinations = require('./vaccinations/vaccinations.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(users);
  app.configure(email);
  app.configure(authManagement);
  app.configure(account);
  app.configure(products);
  app.configure(activities);
  app.configure(contacts);
  app.configure(cardinfos);
  app.configure(vaccinations);
};
