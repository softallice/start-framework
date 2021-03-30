// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const userAgrees = sequelizeClient.define('ap_user_agrees', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: Sequelize.STRING(100),
      allowNull: true,
      unique: false,
    },
    terms_type_cd: {
      type: Sequelize.STRING(2),
      allowNull: true,
      unique: false,
    },
    terms_ver: { 
      type: Sequelize.STRING(4), 
      allowNull: true, 
      unique: false 
    },
    use_yn: { 
      type: Sequelize.STRING(1), 
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
  userAgrees.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return userAgrees;
};
