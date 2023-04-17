'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('patient', 
      {
        id: {
          type: Sequelize.UUID(),
          primaryKey: true,
          unique: true
        },
        name: {
          type: Sequelize.STRING()
        },
        surname: {
          type: Sequelize.STRING()
        },
        dni: {
          type: Sequelize.STRING()
        },
        hospital_id: {
          type: Sequelize.UUID(), //Sequelize.UUID,
          onDelete: 'CASCADE',
          references: {
            model: 'hospital',
            key: 'id',
          },
        },
        created_at: Sequelize.DATE,
        updated_at: Sequelize.DATE
      },
      {
        sync: { force: true },
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('patient');
  }
};