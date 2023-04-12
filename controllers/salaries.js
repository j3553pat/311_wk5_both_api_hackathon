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


  module.exports = {
    getAllSalaries

  }