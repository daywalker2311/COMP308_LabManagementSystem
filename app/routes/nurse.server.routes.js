var express = require('express');
// Load the application controllers
const patientController = require('../controllers/patient.server.controller');
const nurseController = require('../controllers/nurse.server.controller');

const NURSE_API = '/api/nurse';

// Define the routes module' method
module.exports = function (app) {

    app.route(NURSE_API + 's')
        .get(nurseController.list)
        .post(nurseController.createNurse);

    app.route(NURSE_API + '/login').post(nurseController.authenticate);

    app.route(NURSE_API + '/tip')
        .get(nurseController.getListMotivationalTip)
        .post(nurseController.createMotivationalTip);

    app.route(NURSE_API + '/listPatients')
        .get(patientController.list);

};
