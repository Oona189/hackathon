// models/groupeFormateur.js
module.exports = (sequelize, DataTypes) => {
    const GroupeFormateur = sequelize.define("GroupeFormateur", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      dureej: {
        type: DataTypes.INTEGER,
      },
      dureeh: {
        type: DataTypes.INTEGER,
      },
    });
  
  
    return GroupeFormateur;
  };
  