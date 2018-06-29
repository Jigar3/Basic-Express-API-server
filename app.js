const express = require("express");
const bodyParser = require("body-parser");
const student = require("./router/api/route");

const app = express();

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/students", student);

app.get("/", (req, res) => {
  res.send("Hey Buddy");
});

app.listen(3000, () => {
  console.log("Listening at Port 3000");
});
