const mysql = require("mysql2");
const pool = require("../sql/connections");
const { handleSQLError } = require("../sql/error");

// const salaries = require('../data/salaries')

const getAllSalaries = (req, res) => {
  // SELECT ALL salaries
  pool.query("SELECT * FROM salaries LIMIT 1000", (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

//Get list of employee's salaries by first_name
const getSalaryByEmployeeName = (req, res) => {
  let sql =
    "SELECT salary FROM salaries JOIN employees ON salaries.emp_no = employees.emp_no WHERE first_name = ? LIMIT 1000;";
  sql = mysql.format(sql, [req.params.first_name]);
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err);
    return res.json(results);
  });
};

const getSalaryByEmployeeNumber = (req, res) => {
  let sql =
    "SELECT e.emp_no, latest_salaries.latest_salary_date, s.salary FROM employees e JOIN (SELECT emp_no, MAX(to_date) as latest_salary_date FROM salaries GROUP BY emp_no) latest_salaries ON e.emp_no = latest_salaries.emp_no JOIN salaries s ON latest_salaries.emp_no = s.emp_no AND latest_salaries.latest_salary_date = s.to_date WHERE e.emp_no = ?;";
  // let employeeById = employee.find(
  //   (employee) => employee.emp_no == req.params.id
  // );
  sql = mysql.format(sql, [req.params.id]);

  pool.query(sql, (err, rows) => {
    if (err) return handleSQLError(res, err);
    return res.json(rows);
  });
};

module.exports = {
  getSalaryByEmployeeName,
  getAllSalaries,
  getSalaryByEmployeeNumber,
};
