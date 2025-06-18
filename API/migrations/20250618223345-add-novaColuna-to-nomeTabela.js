'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
return queryInterface.addColumn('relatos', 'favorito', {
      type: Sequelize.BOOLEAN,
      allowNull: false,        
      defaultValue: false      
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.removeColumn('relatos', 'favorito');
  }
};
