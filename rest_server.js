const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');

const app = express();

app.use(methodOverride('_method'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


const models = require('./models/models.js');

let Controller;
(async () => {
    tables = await models.configure_db('orm_bbdd');
    Controller = require('./controllers/controller')(tables);
})()


app.get('/', (req, res, next) => {
	res.redirect('/hospitals');
})

app.get('/home', (req, res, next) => {
	res.redirect('/hospitals');
})

app.get('/hospitals', async (req, res, next) => {
    let hospitals = await Controller.list_hospitals().catch(e => next(e));
    res.render('index_hospitals', {hospitals: hospitals});
});

app.post('/hospitals/filterByCity', async (req, res, next) => {
    let hospitals = await Controller.filterHospitalsByCity(req.body.city).catch(e => next(e))
	res.render('index_hospitals', {hospitals: hospitals});
});

app.get('/hospitals/:hospitalId/patients', async (req, res, next) => {
    let patients = await Controller.list_hospital_patients(req.params.hospitalId).catch(e => next(e));
    res.render('index_patients', {patients: patients, hospital: req.params.hospitalId, patientDeleted: req.query.patientDeleted});
});

app.post('/hospitals/:hospitalId/patients', async (req, res, next) => {
	await Controller.create(req.params.hospitalId, req.body.name, req.body.surname, req.body.dni).catch(e => next(e));
	res.redirect('/hospitals/'+req.params.hospitalId+'/patients');
})

app.get('/hospitals/:hospitalId/patients/new', (req, res, next) => {
	res.render('new', {hospital: req.params.hospitalId});
});

app.get('/hospitals/:hospitalId/patients/:patientId', async (req, res, next) => {
	let patient = await Controller.read(req.params.patientId).catch(e => next(e));
	res.render('show', {patient: patient, hospital: req.params.hospitalId});
});

app.put('/hospitals/:hospitalId/patients/:patientId', async (req, res, next) => {
	let patient = await Controller.update(req.params.patientId, req.body.name, req.body.surname, req.body.dni).catch(e => next(e));
	res.render('show', {patient: patient, hospital: req.params.hospitalId});
});

app.delete('/hospitals/:hospitalId/patients/:patientId', async (req, res, next) => {
	let deleted = await Controller.delete(req.params.patientId).catch(e => next(e));
	res.redirect('/hospitals/'+req.params.hospitalId+'/patients?patientDeleted=true');
});

app.get('/hospitals/:hospitalId/patients/:patientId/edit', (req, res, next) => {
	let patientToEdit = {
		id: req.params.patientId,
		name: req.query.name,
		surname: req.query.surname,
		dni: req.query.dni,
	}
	res.render('edit', {patient: patientToEdit, hospital: req.params.hospitalId});
});

app.get('/hospitals/:hospitalId/patients/:patientId/assign_doctor', async (req, res, next) => {
	let patientToEditHistory = {
		id: req.params.patientId
	}
    res.render('assign_doctor', { patient: patientToEditHistory, hospital: req.params.hospitalId });
});

app.put('/hospitals/:hospitalId/patients/:patientId/assign_doctor', async (req, res, next) => {
    let patient = await Controller.assignDoctor(req.params.patientId, req.body.doctor).catch(e => next(e))
    res.render('show', {patient: patient, hospital: req.params.hospitalId});
});

app.get('/hospitals/:hospitalId/patients/:patientId/show_doctors', async (req, res, next) => {
    let doctors = await Controller.showPatientDoctors(req.params.patientId).catch(e => next(e))
    res.render('show_doctors', {doctors: doctors});
});

// handle 404 errors
app.use(function(req, res){
    res.status(404).render('notFound');
});

app.use(function(err, req, res, next) {
	console.log(err);
    res.status(500).render('error', { error: err});
});

const port = parseInt(process.env.PORT || '8001', 10);
app.listen(port, function() {
    console.log('App listening on port: ' + 8001);
});