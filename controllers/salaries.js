const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')
// const salaries = require('../data/salaries')


const getAllSalaries = (req, res) => {
    // SELECT ALL salaries
    pool.query("SELECT * FROM salaries LIMIT 1000", (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }



//Get list of employee's salaries by first_name
const getSalaryByEmployeeName = (req, res) => {
  let sql = "SELECT salary FROM salaries JOIN employees ON salaries.emp_no = employees.emp_no WHERE first_name = ? LIMIT 1000;"
  sql = mysql.format(sql, [req.params.first_name])
  pool.query(sql, (err, results) => {
    if (err) return handleSQLError(res, err)
    return res.json(results);
  })
}

module.exports = {
  getSalaryByEmployeeName,
  getAllSalaries
};
