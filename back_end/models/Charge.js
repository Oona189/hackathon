// models/charge.js
module.exports = (sequelize, DataTypes) => {
    const Charge = sequelize.define("Charge", {
      id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      designation: {
        type: DataTypes.STRING(200),
      },
      familleid: {
        type: DataTypes.STRING(10),
      },
      description: {
        type: DataTypes.TEXT,
      },
    });

    Charge.associate = (models) => {
      Charge.hasMany(models.FormationCharge, {
        onDelete: "cascade",
      });
    }
  
    return Charge;
  };
  