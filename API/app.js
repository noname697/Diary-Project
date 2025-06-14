const express = require("express");
const Controller = require('./controllers/controller.js')

const app = express();
const PORT = 8000;

app.get("/", (req, res) => {
  Controller.pegaTodos(req, res);
});

app.listen(PORT, () => {
  console.log("Ouvindo a porta: " + PORT);
});
