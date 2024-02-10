// models/formateur.js
module.exports = (sequelize, DataTypes) => {
    const Formateur = sequelize.define("Formateur", {
      id: {
        type: DataTypes.STRING(10),
        primaryKey: true,
        allowNull: false,
      },
      civilite: {
        type: DataTypes.STRING(20),
      },
      nom: {
        type: DataTypes.STRING(40),
      },
      prenom: {
        type: DataTypes.STRING(40),
      },
      sexe: {
        type: DataTypes.STRING(20),
      },
      adresse: {
        type: DataTypes.STRING(200),
      },
      mail: {
        type: DataTypes.STRING(200),
      },
      tel: {
        type: DataTypes.STRING(20),
      },
      diplome: {
        type: DataTypes.STRING(50),
      },
      specialite: {
        type: DataTypes.STRING(120),
      },
    });
  
    Formateur.associate = (models) => {
      Formateur.hasMany(models.GroupeFormateur, {
        onDelete: "cascade",
      });
      Formateur.hasMany(models.FormateurTheme, {
        onDelete: "cascade",
      });
    };
    
    return Formateur;
  };
  