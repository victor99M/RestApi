import config from "../config";
import mysql from "promise-mysql";

const connection = mysql.createConnection({
  host: config.host,
  database: config.database,
  user: config.user,
  password: config.password,
});

const getConnection = () => {
  return connection;
};

module.exports = {
  getConnection,
};
