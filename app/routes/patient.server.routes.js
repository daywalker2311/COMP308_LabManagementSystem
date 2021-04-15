var express = require('express');
// Load the application controllers
const patientController = require('../controllers/patient.server.controller');
const patientInfoController = require('../controllers/patient_info.server.controller');

const PATIENT_API = '/api/patient';
const API = '/api';

// Define the routes module' method
module.exports = function (app) {

    app.route(PATIENT_API + 's')
        .get(patientController.list)
        .post(patientController.newPatient);

    app.route(PATIENT_API + '/login').post(patientController.authenticate);

    //populate list of videos
    app.route(PATIENT_API + '/videos')
        .get(patientController.listVideos);

    app.param('patientId', patientController.listAllDailyInfoById);

    app.route(API + '/listAllDailyInfoById/:patientId')
        .get(patientController.listAllDailyInfoById)

    app.route(PATIENT_API + '/checklist')
        .get(patientController.checkList)
        .post(patientController.diagnose);

    app.route(API + '/dailyInfo')
        .post(patientInfoController.saveDailyInfo);

};
