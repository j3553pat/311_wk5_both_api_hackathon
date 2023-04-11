const mysql = require('mysql2')
const pool = require('../sql/connection')
const { handleSQLError } = require('../sql/error')

const getAllSalaries = (req, res) => {
    // SELECT ALL salaries
    pool.query("SELECT * FROM salaries", (err, rows) => {
      if (err) return handleSQLError(res, err)
      return res.json(rows);
    })
  }


  module.exports = {
    getAllSalaries

  }