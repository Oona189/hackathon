// models/partenaire.js
module.exports = (sequelize, DataTypes) => {
  const Partenaire = sequelize.define("Partenaire", {
    id: {
      type: DataTypes.STRING(20),
      primaryKey: true,
      allowNull: false,
    },
    sigle: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    denomination: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    denominationar: {
      type: DataTypes.STRING(200),
      allowNull: false,
    },
    categorie: {
      type: DataTypes.STRING(20),
    },
    adresse: {
      type: DataTypes.STRING(200),
    },
    pays: {
      type: DataTypes.STRING(60),
    },
    tel: {
      type: DataTypes.STRING(100),
    },
    fax: {
      type: DataTypes.STRING(100),
    },
    mail: {
      type: DataTypes.STRING(200),
    },
    url: {
      type: DataTypes.STRING(200),
    },
    notes: {
      type: DataTypes.TEXT,
    },
  });

  Partenaire.associate = (models) => {
    Partenaire.hasMany(models.Apprenant, {
      onDelete: "cascade",
    });
    Partenaire.hasMany(models.FormationPartenaire, {
      onDelete: "cascade",
    });
  };

  return Partenaire;
};
