const express = require("express");
const app = express();
const port = process.env.PORT || 4001;
const routes = require("./routes");

// body parser substitute
app.use(express.json());
app.use(routes);

app.get("/", (req, res) => res.send("Welcome to our API!"));

app.listen(port, () => console.log(`App listening on port ${port}!`));