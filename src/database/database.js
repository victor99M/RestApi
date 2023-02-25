import config from "../config";
import mysql from "mysql2/promise";

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
  port: config.port,
});

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
