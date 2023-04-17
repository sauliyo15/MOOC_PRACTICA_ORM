'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('hospital', [{
        id: '9f8a5c90-cf1a-4ca3-9dea-c6a94174ae69',
        name: 'Hospital Univesitario La Paz',
        city: 'Madrid',
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 'b04fde75-59d8-457f-82b9-c25f2c64abfc',
        name: 'Hospital Carlos III',
        city: 'Madrid',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 'c5d7cbea-55a4-4809-9969-82b148032a0e',
        name: 'Hospital del Mar',
        city: 'Barcelona',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 'db6da10f-4ec4-468a-ad46-36a407480fa7',
        name: 'Complejo Asistencial de Segovia',
        city: 'Segovia',
        created_at: new Date(),
        updated_at: new Date()
      }, {
        id: 'd2dc1154-1329-4e56-a5c3-8e88b63f3c4a',
        name: 'Hospital Virgen de la Salud',
        city: 'Toledo',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('hospital', null, {});
  }
};