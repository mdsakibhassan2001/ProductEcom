const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "sakib@590",
  database: "anayase_blog",
  port: 3306,
});
db.getConnection(() => {
  console.log("Anayse db is connecte");
});

module.exports = db;
