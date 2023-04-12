const mysql = require("mysql2");
const pool = require("../sql/connection");
const { handleSQLError } = require("../sql/error");

//Gets all employees(Emp#, DOB, first name, last name, gender, Hire date)
const getAllEmployees = (req, res) => {
  pool.query("SELECT * FROM employees LIMIT 1000;", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};
const getEmployeesById = (req, res) => {
    pool.query($`SELECT * FROM employees WHERE id = ${req.params.id} LIMIT 1000`, (err, rows) => {
        if (err) return handleSQLError(res, err);
        return res.json(rows);
    });
}
module.exports = {
  getAllEmployees,
};