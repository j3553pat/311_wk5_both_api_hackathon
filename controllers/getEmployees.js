const mysql = require("mysql2");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

const getAllEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 1000;", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};
const showEmployee = (req, res) => {
  let sql = "SELECT * FROM employees WHERE emp_no = ?";
  sql = mysql.format(sql, [req.params.emp_no]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getAllEmployees,
  showEmployee,
};
