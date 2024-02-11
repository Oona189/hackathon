// models/apprenant.js
module.exports = (sequelize, DataTypes) => {
  const Apprenant = sequelize.define("Apprenant", {
    id: {
      type: DataTypes.STRING(10),
      primaryKey: true,
      allowNull: false,
    },
    nom: {
      type: DataTypes.STRING(70),
    },
    prenom: {
      type: DataTypes.STRING(70),
    },
    nomar: {
      type: DataTypes.STRING(70),
    },
    prenomar: {
      type: DataTypes.STRING(70),
    },
    sexe: {
      type: DataTypes.STRING(30),
    },
    fonction: {
      type: DataTypes.STRING(200),
    },
    niveau: {
      type: DataTypes.STRING(100),
    },
    tel: {
      type: DataTypes.STRING(60),
    },
    mail: {
      type: DataTypes.STRING(200),
    },
    notes: {
      type: DataTypes.TEXT,
    },
  });


  Apprenant.associate = (models) => {
    Apprenant.belongsTo(models.Partenaire, {
      foreignKey: 'id',
      as: 'partenaire',
    });
    Apprenant.hasMany(models.GroupeApprenant, {
      onDelete: "cascade",
    });
    Apprenant.hasMany(models.FormationApprenant, {
      onDelete: "cascade",
    });
  }

  return Apprenant;
};
