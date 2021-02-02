// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const activities = sequelizeClient.define('activities', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    contact_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: false
    },
    user_id: {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: false
    },
    type_cd: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    status_cd: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    description: {
      type: Sequelize.STRING(1023),
      allowNull: true,
      unique: false
    },
    start_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    end_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    due_date: {
      type: Sequelize.DATE,
      allowNull: true
    },
    duration: {
      type: Sequelize.INTEGER,
      allowNull: true,
      unique: false
    },
    description: {
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
  activities.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return activities;
};
