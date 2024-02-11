// models/formationApprenant.js
module.exports = (sequelize, DataTypes) => {
    const FormationApprenant = sequelize.define("FormationApprenant", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      }
    });
  
  
    return FormationApprenant;
  };
  