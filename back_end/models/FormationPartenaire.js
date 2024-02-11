// models/formationPartenaire.js
module.exports = (sequelize, DataTypes) => {
    const FormationPartenaire = sequelize.define("FormationPartenaire", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      nbparticipants: {
        type: DataTypes.INTEGER,
      },
      notes: {
        type: DataTypes.TEXT,
      },
    });
    
    return FormationPartenaire;
  };
  