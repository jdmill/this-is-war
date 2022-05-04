const Sequelize = require("sequelize");
require("dotenv").config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL);
} else {
  sequelize = new Sequelize(
    "mysql://b223d6481c9c8f:cf874425@us-cdbr-east-05.cleardb.net/heroku_715fcb0d3f957f8?reconnect=true",
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: "localhost",
      dialect: "mysql",
      port: "3306",
    }
  );
}

module.exports = sequelize;
