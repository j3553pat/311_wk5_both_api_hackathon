const mysql = require("mysql2");
const pool = require("../sql/connections");
const { handleSQLError } = require("../sql/error");

//Gets all employees(Emp#, title, from_date, to_date) limit 1000.
const getAllTitles = (req, res) => {
  pool.query("SELECT * FROM titles LIMIT 1000;", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getAllTitles,
};
