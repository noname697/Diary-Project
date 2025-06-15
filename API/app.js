const express = require("express");
const Controller = require("./controllers/controller.js");
const cors = require("cors");

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => Controller.pegaTodos(req, res));
app.get("/:id", (req, res) => Controller.pegaUm(req, res));
app.post("/", (req, res) => Controller.postaRelato(req, res));
app.put("/:id", (req, res) => Controller.editaRelato(req, res));
app.delete("/:id", (req, res) => Controller.deletaRelato(req, res));

app.listen(PORT, () => {
  console.log("Ouvindo a porta: " + PORT);
});
