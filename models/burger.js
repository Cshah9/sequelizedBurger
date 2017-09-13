module.exports = function(sequelize, DataTypes) {
  
  var Burger = sequelize.define("Burger", {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true} ,
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN,
    date: DataTypes.DATE
    }
  );

   return Burger;
};

  