const mysql = require('mysql2');
require('dotenv').config();

class Connection {
  constructor() {
    if (!this.pool) {
      console.log('creating connection...')
      this.pool = mysql.createPool({
        connectionLimit: 100,
        host: process.env.HOST,
        user: process.env.USER,
        password: process.env.PWuser,
        database: process.env.DBuser
      })

      return this.pool
    }

    return this.pool
  }
};

const instance = new Connection();

module.exports = instance;