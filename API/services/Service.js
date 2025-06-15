const { Relato } = require("../models/index.js");

class Service {
  static async pegaTudo() {
    return Relato.findAll();
  }

  static async postRelato(dados) {
    return Relato.create(dados);
  }
}

module.exports = Service;
