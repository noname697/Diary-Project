"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      "relatos",
      [
        {
          data: "2025-06-10",
          texto:
            "Hoje foi um dia bastante produtivo no trabalho. Consegui finalizar todas as tarefas que estavam pendentes e ainda adiantei algumas demandas da próxima semana.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data: "2025-06-11",
          texto:
            "O clima estava agradável durante a manhã, então decidi caminhar até o escritório. No caminho, aproveitei para ouvir um podcast sobre tecnologia e inovação.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data: "2025-06-12",
          texto:
            "Recebi uma visita inesperada de um amigo antigo que não via há anos. Conversamos por horas e relembramos muitos momentos bons da época da faculdade.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data: "2025-06-13",
          texto:
            "Passei boa parte do dia estudando novas bibliotecas JavaScript. Estou focado em melhorar minhas habilidades em desenvolvimento front-end e já vejo progresso.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          data: "2025-06-14",
          texto:
            "Hoje foi um sábado tranquilo. Aproveitei para descansar, ler um bom livro e organizar algumas coisas em casa que estavam ficando para depois há semanas.",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("relatos", null, {});
  },
};
