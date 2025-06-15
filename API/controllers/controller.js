const Service = require("../services/Service.js");

class Controller {
  static async pegaTodos(req, res) {
    try {
      const listaDeRelatos = await Service.pegaTudo();
      res.status(200).json(listaDeRelatos);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async postaRelato(req, res) {
    try {
      const dados = req.body;
      const relatoCriado = await Service.postRelato(dados);
      res.status(201).send(relatoCriado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = Controller;
