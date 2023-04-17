'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('doctor', [{
        id: '014bd297-0a3d-4a17-b207-cff187690045',
        name: 'Dr Pedro',
        surname: 'Garcia',
        speciality: 'Medico de cabecera',
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 'a0f54d52-5ccb-4e50-adca-5ea0064262fd',
        name: 'Dra Cristina',
        surname: 'Pozo',
        speciality: 'Medico de cabecera',
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: '1497d1be-577a-41ad-b129-45271e113cc0',
        name: 'Dra Luisa',
        surname: 'Alarcon',
        speciality: 'Traumatologo',
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: '9bb2e300-fa15-4063-a291-13f7199ddb52',
        name: 'Dra Patricia',
        surname: 'Sanchez',
        speciality: 'Reumatologo',
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 'fc4ba036-8a70-4c6e-9b23-dd2a8035c142',
        name: 'Dr Miguel',
        surname: 'Duran',
        speciality: 'Traumatologo',
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: '5ba70d7d-67fc-430c-ab39-1b62e12f2346',
        name: 'Dra Amelia',
        surname: 'Huertas',
        speciality: 'Cardiologo',
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: '8f5cb256-7f39-4293-817a-b5e50a0e0062',
        name: 'Dr Casimiro',
        surname: 'Llorente',
        speciality: 'Neumologo',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('doctor', null, {});
  }
};