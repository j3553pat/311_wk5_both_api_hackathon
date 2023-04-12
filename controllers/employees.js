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
  getAllEmployees,
  getSalaryByEmployeeNumber,
};
