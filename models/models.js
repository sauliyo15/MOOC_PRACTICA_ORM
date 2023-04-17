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
  ///////

  // Rellene aqui para realizar las asociaciones entre los modelos anteriores

  ///////


  return {
    Hospital:  Hospital,
    Patient:  Patient,
    Doctor:  Doctor
  }

}