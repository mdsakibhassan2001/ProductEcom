const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "sakib@590",
  database: "btb24",
  port: 3306,
});
db.getConnection(() => {
  console.log("BTB Data Base is connecte");
});

module.exports = db;
