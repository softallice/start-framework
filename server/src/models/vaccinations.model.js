// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const vaccinations = sequelizeClient.define('vaccinations', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    did: {
      type: Sequelize.STRING(1000),
      allowNull: true,
      unique: false
    },
    vaccName: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    vaccSeq: {
      type: Sequelize.STRING(10),
      allowNull: true,
      unique: false
    },
    vaccDate: {
      type: Sequelize.STRING(8),
      allowNull: true,
      unique: false
    },
    vaccCom: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    vaccLoc: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    vaccineName: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    vaccineLot: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    manufacturer: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false
    },
    certNo: {
      type: Sequelize.STRING(100),
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
  vaccinations.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return vaccinations;
};
