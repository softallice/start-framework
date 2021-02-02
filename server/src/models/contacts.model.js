// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const contacts = sequelizeClient.define('contacts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    last_name: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    title: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    phone: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    status_cd: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false,
      defaultValue: "active"
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  contacts.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return contacts;
};
