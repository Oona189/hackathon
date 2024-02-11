// models/familleCharge.js
module.exports = (sequelize, DataTypes) => {
    const FamilleCharge = sequelize.define("FamilleCharge", {
      id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      designation: {
        type: DataTypes.STRING(250),
      },
      notes: {
        type: DataTypes.TEXT,
      },
    });


    FamilleCharge.associate = (models) => {
        FamilleCharge.hasMany(models.Charge, {
          onDelete: "cascade",
        });
    }
  
    return FamilleCharge;
  };
  