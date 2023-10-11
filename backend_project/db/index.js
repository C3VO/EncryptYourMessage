const Sequelize = require("sequelize");

const sequelize = new Sequelize("react.js", "root", "", {
    dialect: "mysql",
    host: "localhost",
    port: 3306
});

const Notes = require('./notes')(sequelize);

module.exports = {
    sequelize: sequelize,
    notes: Notes
}