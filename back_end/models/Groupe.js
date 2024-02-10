// models/groupe.js
module.exports = (sequelize, DataTypes) => {
    const Groupe = sequelize.define("Groupe", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nbparticipants: {
        type: DataTypes.INTEGER,
      },
      datedebut: {
        type: DataTypes.DATE,
      },
      datefin: {
        type: DataTypes.DATE,
      },
      dureej: {
        type: DataTypes.INTEGER,
      },
      dureeh: {
        type: DataTypes.INTEGER,
      },
    });

    Groupe.associate = (models) => {
      Groupe.hasMany(models.GroupeApprenant, {
        onDelete: "cascade",
      });
      Groupe.hasMany(models.GroupeFormateur, {
        onDelete: "cascade",
      });
      Groupe.hasMany(models.FormationApprenant, {
        onDelete: "cascade",
      });
    };
  
    return Groupe;
  };
  