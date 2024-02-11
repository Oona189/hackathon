// models/formateurTheme.js
module.exports = (sequelize, DataTypes) => {
    const FormateurTheme = sequelize.define("FormateurTheme", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      expertise: {
        type: DataTypes.INTEGER,
      },
      certification: {
        type: DataTypes.STRING(250),
      },
    });
  
  
    return FormateurTheme;
  };
  