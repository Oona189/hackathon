// models/domaine.js
module.exports = (sequelize, DataTypes) => {
    const Domaine = sequelize.define("Domaine", {
      id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      designation: {
        type: DataTypes.STRING(200),
      },
    });
  
    // Add any associations if necessary
    Domaine.associate = (models) => {
        Domaine.hasMany(models.Theme, {
          onDelete: "cascade",
        });
      }
    return Domaine;
  };
  