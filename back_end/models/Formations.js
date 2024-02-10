module.exports = (sequelize, DataTypes) => {
    const Formations = sequelize.define("formation", {
        id: {
          type: DataTypes.STRING(10),
          primaryKey: true,
          allowNull: false,
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
  
    return Formations;
  };