// models/formationCharge.js
module.exports = (sequelize, DataTypes) => {
    const FormationCharge = sequelize.define("FormationCharge", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      prix: {
        type: DataTypes.DECIMAL(18, 2),
      },
      quantite: {
        type: DataTypes.DECIMAL(18, 2),
      },
      tauxtva: {
        type: DataTypes.DECIMAL(18, 2),
      },
      totalht: {
        type: DataTypes.DECIMAL(18, 2),
      },
      totaltva: {
        type: DataTypes.DECIMAL(18, 2),
      },
      totalttc: {
        type: DataTypes.DECIMAL(18, 2),
      },
      description: {
        type: DataTypes.TEXT,
      },
    });
    
    return FormationCharge;
  };
  