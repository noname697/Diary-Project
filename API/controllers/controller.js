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
      res.status(201).json(relatoCriado);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async pegaUm(req, res) {
    try {
      const id = req.params.id;
      const relato = await Service.pegaEspecifico(id);
      res.status(200).json(relato);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async editaRelato(req, res) {
    try {
      const id = req.params.id;
      const dados = req.body;
      const relatoAlterado = await Service.putRelato(id, dados);
      res.status(201).json(relatoAlterado);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }

  static async deletaRelato(req, res) {
    try {
      const id = req.params.id
      const relatoDeletado = await Service.deleteRelato(id)
      res.status(204).json(relatoDeletado)
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = Controller;
