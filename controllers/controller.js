const { where } = require("sequelize");

module.exports = function (models) {
    var module = {};

    let Hospital = models.Hospital;
    let Patient = models.Patient;
    let Doctor = models.Doctor;

    // Buscar todos los hospitales
    module.list_hospitals = async function() {
        try {
            return await Hospital.findAll();
        } catch (error) {
            return error;
        }
    }

    // Filtra los hospitales por ciudad
    module.filterHospitalsByCity = async function (city) {
        try {
            return await Hospital.findAll({where: {city: city}});
        } catch (error) {
            return error;
        }
    }

    // Buscar pacientes de un hospital ordenadors por el nombre (de la A a la Z)
    module.list_hospital_patients = async function(hospital_id) {
        try {
            return await Patient.findAll({where: {hospital_id: hospital_id}, order: [['name', 'ASC']]},);
        } catch (error) {
            return error;
        }  
    }

    // Muestra la informacion de un paciente
    module.read = async function(patient_id) {
        try {
            return await Patient.findByPk(patient_id);
        } catch (error) {
            return error;
        }
    }

    // Crea un paciente en un hospital
    module.create = async function(hospital_id, name, surname, dni) {
        let new_patient = {
            name: name,
            surname: surname,
            dni: dni,
            hospital_id: hospital_id
        };
        try {
            return await Patient.create(new_patient);
        } catch (error) {
            return error;
        }
    }

    // Actualiza un paciente
    module.update= async function(patient_id, name, surname, dni) {
        try {
            let patient = await Patient.findByPk(patient_id);
            patient.name = name;
            patient.surname = surname;
            patient.dni = dni;
            return await patient.save();
        } catch (error) {
            return error;
        }
    }

    // Borra un paciente
    module.delete = async function(patient_id) {
        try {
            let patient = await Patient.findByPk(patient_id);
            return await patient.destroy();
        } catch (error) {
            return error;
        }
    }

    // Asigna un doctor y devuelve los datos del paciente
    module.assignDoctor = async function (patient_id, doctor_id) {
        try {
            let patient = await Patient.findByPk(patient_id);
            let doctor = await Doctor.findByPk(doctor_id);
            await patient.addDoctor(doctor);
            return patient;
        } catch (error) {
            return error;
        }
    }

    // Muestras los medicos de un paciente
    module.showPatientDoctors = async function (patient_id) {
        try {
            let patient = await Patient.findByPk(patient_id);
            return await patient.getDoctors();
        } catch (error) {
            return error;
        }
    }


    return module;
};