// models/groupeApprenant.js
module.exports = (sequelize, DataTypes) => {
    const GroupeApprenant = sequelize.define("GroupeApprenant", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
    });
  
  
    return GroupeApprenant;
  };
  