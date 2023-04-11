const express = require('express');
const { getEmployeesById } = require('./controllers/employees');
const app = express();
const port = process.env.PORT || 4001;

app.get('/:id', getEmployeesById)


app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})