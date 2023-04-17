module.exports = {
  up(queryInterface, Sequelize) {
    return queryInterface.createTable(
      'patient_doctor',
      {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
        },
        patient_id: {
          type: Sequelize.UUID(),
          onDelete: 'CASCADE',
          references: {
            model: 'patient',
            key: 'id',
          },
        },
        doctor_id: {
          type: Sequelize.UUID(),
          onDelete: 'CASCADE',
          references: {
            model: 'doctor',
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

  down(queryInterface, Sequelize) {
    return queryInterface.dropTable('patient_doctor');
  },
};