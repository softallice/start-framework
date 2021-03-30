// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const agreeTerms = sequelizeClient.define('ap_terms', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    terms_type_cd: {
      type: Sequelize.STRING(2),
      allowNull: true,
      unique: false,
    },
    terms_nm: { 
      type: Sequelize.STRING(50), 
      allowNull: true, 
      unique: false 
    },
    terms_ver: { 
      type: Sequelize.STRING(4), 
      allowNull: true, 
      unique: false 
    },
    essen_yn: { 
      type: Sequelize.STRING(1), 
      allowNull: true, 
      unique: false 
    },
    step_gbcd: { 
      type: Sequelize.STRING(2), 
      allowNull: true, 
      unique: false 
    },
    use_org_no: {
      type: Sequelize.STRING(10),
      allowNull: true,
      unique: false,
    },
    terms_conts: { 
      type: Sequelize.TEXT, 
      allowNull: true, 
      unique: false 
    },
    terms_conts_pdf: { 
      type: Sequelize.BLOB, 
      allowNull: true, 
      unique: false 
    },
    use_yn: { 
      type: Sequelize.STRING(1), 
      allowNull: true, 
      unique: false 
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  // eslint-disable-next-line no-unused-vars
  agreeTerms.associate = function (models) {
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return agreeTerms;
};
