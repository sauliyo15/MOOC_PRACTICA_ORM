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
        // Rellena aqui ...
    }

    // Buscar pacientes de un hospital ordenadors por el nombre (de la A a la Z)
    module.list_hospital_patients = async function(hospital_id) {
        // Rellene aqui ...
    }

    // Muestra la informacion de un paciente
    module.read = async function(patient_id) {
        // Rellene aqui ...
    }

    // Crea un paciente en un hospital
    module.create = async function(hospital_id, name, surname, dni) {
        // Rellene aqui ...
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