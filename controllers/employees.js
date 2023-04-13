const mysql = require("mysql2");
const pool = require("../sql/connections");
const { handleSQLError } = require("../sql/error");

const getEmployeesFirstName = (req, res) => {
  pool.query("SELECT first_name FROM employees LIMIT 1000", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};
const getAllEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 1000;", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};
const getEmployeesById = (req, res) => {
  pool.query(
    `SELECT * FROM employees WHERE emp_no = ${req.params.emp_no} LIMIT 1000`,
    (err, rows) => {
      if (err) return handleSQLError(res, err);
      return res.json(rows);
    }
  );
};
module.exports = {
  getAllEmployees,
  getEmployeesById,
  getEmployeesFirstName,
};
