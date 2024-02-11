module.exports = (sequelize, DataTypes) => {
    const Formation = sequelize.define("Formation", {
        id: {
          type: DataTypes.INTEGER,
          primaryKey: true,
          allowNull: false,
          autoIncrement:true,
        },
        objet: {
          type: DataTypes.STRING(200),
        },
        genre: {
          type: DataTypes.STRING(20),
        },
        exercice: {
          type: DataTypes.STRING(20),
        },
        datedebut: {
          type: DataTypes.DATE,
        },
        datefin: {
          type: DataTypes.DATE,
        },
        duree: {
          type: DataTypes.INTEGER,
        },
        nbthemes: {
          type: DataTypes.INTEGER,
        },
        notes: {
          type: DataTypes.TEXT,
        },
      });

      Formation.associate = (models) => {
        Formation.hasMany(models.Groupe, {
          onDelete: "cascade",
        });
        Formation.hasMany(models.FormationCharge, {
          onDelete: "cascade",
        });
        Formation.hasMany(models.FormationApprenant, {
          onDelete: "cascade",
        });
        Formation.hasMany(models.FormationPartenaire, {
          onDelete: "cascade",
        });
      }

    return Formation;
  };