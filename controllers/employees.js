const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')


const getEmployeesFirstName = (req, res) => {
  pool.query("select first_name from employees LIMIT 1000;", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
}

//Gets all employees(Emp#, DOB, first name, last name, gender, Hire date)
const getAllEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 1000;", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getAllEmployees,
  getEmployeesFirstName
};
