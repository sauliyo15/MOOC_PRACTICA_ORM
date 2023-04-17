'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('patient', [{
        id: '3a268172-6c5c-4d9b-8964-8b9a1e531af5',
        name: 'Juan',
        surname: 'Rodriguez',
        dni: '123123',
        hospital_id: '9f8a5c90-cf1a-4ca3-9dea-c6a94174ae69'  ,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: '088d58e2-7691-47b6-a322-eeffcadc9054',
        name: 'Andres',
        surname: 'Lopez',
        dni: '222333',
        hospital_id: 'b04fde75-59d8-457f-82b9-c25f2c64abfc'  ,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: '8ec8c43b-f7e1-43e4-b70f-6d5a9799a86a',
        name: 'Carlos',
        surname: 'Lechon',
        dni: '333444',
        hospital_id: 'c5d7cbea-55a4-4809-9969-82b148032a0e'  ,
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: '923ec756-87b7-4743-808b-795a04b6dd21',
        name: 'Diana',
        surname: 'Pintor',
        dni: '555666',
        hospital_id: '9f8a5c90-cf1a-4ca3-9dea-c6a94174ae69',
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: '508fb53c-c212-453f-ab17-cf56049f5a2c',
        name: 'Raquel',
        surname: 'Dueñas',
        dni: '666777',
        hospital_id: '9f8a5c90-cf1a-4ca3-9dea-c6a94174ae69',
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: '623f492d-a42c-481e-bf21-c0acbc1b90f8',
        name: 'Mario Alejandro',
        surname: 'Arcentales',
        dni: '777888',
        hospital_id: 'db6da10f-4ec4-468a-ad46-36a407480fa7',
        created_at: new Date(),
        updated_at: new Date()
      },{
        id: 'a1965d07-caae-407d-8df1-060e88015932',
        name: 'Ana',
        surname: 'Durcal',
        dni: '555555',
        hospital_id: 'd2dc1154-1329-4e56-a5c3-8e88b63f3c4a',
        created_at: new Date(),
        updated_at: new Date()
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('patient', null, {});
  }
};