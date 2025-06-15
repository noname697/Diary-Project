const { Relato } = require("../models/index.js");

class Service {
  static async pegaTudo() {
    return Relato.findAll();
  }

  static async postRelato(dados) {
    return Relato.create(dados);
  }

  static async pegaEspecifico(id) {
    return Relato.findByPk(id);
  }

  static async putRelato(id, dados) {
    return Relato.update(
      { data: dados.data, texto: dados.texto },
      {
        where: {
          id: id,
        },
      }
    );
  }
}

module.exports = Service;
