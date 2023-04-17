'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('hospital', 
      {
        id: {
          type: Sequelize.UUID(),
          primaryKey: true,
          unique: true
        },
        name: {
          type: Sequelize.STRING()
        },
        city: {
          type: Sequelize.STRING()
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      },
      {
        sync: { force: true },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('hospital');
  }
};