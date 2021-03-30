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
    name: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    position: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    avatar: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    company_email: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    website: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    phone: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    secondary_phone: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    address: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    favorite: {
      type: Sequelize.STRING,
      allowNull: true,
      unique: false
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
