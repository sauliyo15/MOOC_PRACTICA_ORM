'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('patient_doctor', [{
        id: '1',
        patient_id: '3a268172-6c5c-4d9b-8964-8b9a1e531af5',
        doctor_id: '014bd297-0a3d-4a17-b207-cff187690045',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '2',
        patient_id: '088d58e2-7691-47b6-a322-eeffcadc9054',
        doctor_id: 'a0f54d52-5ccb-4e50-adca-5ea0064262fd',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '3',
        patient_id: '8ec8c43b-f7e1-43e4-b70f-6d5a9799a86a',
        doctor_id: '1497d1be-577a-41ad-b129-45271e113cc0',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '4',
        patient_id: '923ec756-87b7-4743-808b-795a04b6dd21',
        doctor_id: '9bb2e300-fa15-4063-a291-13f7199ddb52',
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        id: '5',
        patient_id: '3a268172-6c5c-4d9b-8964-8b9a1e531af5',
        doctor_id: '9bb2e300-fa15-4063-a291-13f7199ddb52',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('patient_doctor', null, {});
  }
};