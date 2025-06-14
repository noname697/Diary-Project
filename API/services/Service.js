const { Relato } = require("../models/index.js");

class Service {
  static async pegaTudo() {
    return Relato.findAll();
  }
}

module.exports = Service;
