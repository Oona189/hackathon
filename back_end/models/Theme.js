// models/theme.js
module.exports = (sequelize, DataTypes) => {
    const Theme = sequelize.define("Theme", {
      id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      designation: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      niveau: {
        type: DataTypes.STRING(60),
      },
      dureejour: {
        type: DataTypes.INTEGER,
      },
      heureparjour: {
        type: DataTypes.INTEGER,
      },
      dureeheure: {
        type: DataTypes.INTEGER,
      },
      publicvise: {
        type: DataTypes.STRING(200),
      },
      tarifreference: {
        type: DataTypes.DECIMAL(18, 2),
      },
      objectif: {
        type: DataTypes.TEXT,
      },
      description: {
        type: DataTypes.TEXT,
      },
    });

    Theme.associate = (models) => {
      Theme.hasMany(models.Groupe, {
        onDelete: "cascade",
      });
      Theme.hasMany(models.FormateurTheme, {
        onDelete: "cascade",
      });
    };
  
    return Theme;
  };
  