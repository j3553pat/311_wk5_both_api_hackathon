const express = require("express");
const app = express();
const employeesRouter = require("./routers/employees");

const port = process.env.PORT || 4001;

// body parser substitute
app.use(express.json());
// uses employees router
app.use("/employees", employeesRouter);

app.get("/", (req, res) => {
  res.send("Welcome to our server!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
