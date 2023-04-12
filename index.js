const express = require("express");
const app = express();
const port = process.env.PORT || 4001;

const salaryRoutes = require('./routes/salaries')

app.use('/salaries', salaryRoutes)

app.get("/", (req, res) => res.send("Welcome to our API!"));

app.listen(port, () => console.log(`App listening on port ${port}!`));
