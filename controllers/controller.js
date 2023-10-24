const { where } = require("sequelize");

module.exports = function (models) {
    var module = {};

    let Hospital = models.Hospital;
    let Patient = models.Patient;
    let Doctor = models.Doctor;

    // Buscar todos los hospitales
    module.list_hospitals = async function() {
        let hospitals = await Hospital.findAll();
        return hospitals;
    }

    // Filtra los hospitales por ciudad
    module.filterHospitalsByCity = async function (city) {
        let hospitals = await Hospital.findAll({where: {city: city}});
        return hospitals;
    }

    // Buscar pacientes de un hospital ordenadors por el nombre (de la A a la Z)
    module.list_hospital_patients = async function(hospital_id) {
        let patients = await Patient.findAll({where: {hospital_id: hospital_id}, order: [['name', 'ASC']]},);
        return patients;
    }

    // Muestra la informacion de un paciente
    module.read = async function(patient_id) {
        let patient = await Patient.findByPk(patient_id)
        return patient;
    }

    // Crea un paciente en un hospital
    module.create = async function(hospital_id, name, surname, dni) {
        let new_patient = {
            name: name,
            surname: surname,
            dni: dni,
            hospital_id: hospital_id
        }
        return await Patient.create(new_patient);
    }

    // Actualiza un paciente
    module.update= async function(patient_id, name, surname, dni) {
        // Rellene aqui ...
    }

    // Borra un paciente
    module.delete = async function(patient_id) {
        // Rellene aqui ...
    }

    // Asigna un doctor y devuelve los datos del paciente
    module.assignDoctor = async function (patient_id, doctor_id) {
        // Rellene aqui ...
    }

    // Muestras los medicos de un paciente
    module.showPatientDoctors = async function (patient_id) {
        // Rellene aqui ...
    }


    return module;
};