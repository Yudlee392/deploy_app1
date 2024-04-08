const express = require('express');
const facultyController = require("../app/controllers/FacultyController");
const route = express.Router();

route.get('/faculty/create', facultyController.createFacultyForm);
route.post('/faculty/create', facultyController.createFaculty);
route.get('/faculty/view', facultyController.viewFaculties);
route.post('/faculty/:id/delete', facultyController.deleteFaculty);


route.get('/faculty/:id/edit', facultyController.editFaculty);
route.post('/faculty/:id/update', facultyController.updateFaculty);

module.exports = route;