

const getEmployeesById = (req, res) => {
    res.json(employees.filter(user => user.id === parseInt(req.params.id)));
}




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

module.exports = {
  getAllEmployees,
};
