const path = require('path');

// Load ORM Sequelize
const Sequelize = require('sequelize');

exports.configure_db = async function(db) {
  // Create connection with MySQL
  const sequelize = new Sequelize(db, process.env.MYSQL_USER, process.env.MYSQL_PASS,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      logging: false
    }
  );

  try {
    await sequelize.authenticate()
    console.log('Connected to MySQL!')
  } catch (err) {
    console.log('Error connecting to Database: ' + err)
  }

  // Import Models
  const Patient = sequelize.import(path.join(__dirname, 'patient'));
  const Hospital = sequelize.import(path.join(__dirname, 'hospital'));
  const Doctor = sequelize.import(path.join(__dirname, 'doctor'));


  // Relationships
  
  // Relation 1-to-N between Hospital and Patient:
  Hospital.hasMany(Patient, {as: 'patients', foreignKey: 'hospital_id'});
  Patient.belongsTo(Hospital, {as: 'user', foreignKey: 'hospital_id'});

  // Relation N-to-N entre Patient y Doctor
  Patient.belongsToMany(Doctor, {
    as: 'doctors',
    through: 'patient_doctor',
    foreignKey: 'patient_id',
    otherKey: 'doctor_id'
    });

  Doctor.belongsToMany(Patient, {
    as: 'patients',
    through: 'patient_doctor',
    foreignKey: 'doctor_id',
    otherKey: 'patient_id'
  });

  return {
    Hospital:  Hospital,
    Patient:  Patient,
    Doctor:  Doctor
  }

}