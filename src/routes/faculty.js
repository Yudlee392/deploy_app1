const express = require('express');
const FacultyController = require("../app/controllers/FacultyController");
const facultyRouter = express.Router();

facultyRouter.get('/faculty/create', FacultyController.createFacultyForm);
facultyRouter.post('/faculty/create', FacultyController.createFaculty);
facultyRouter.get('/faculty/view', FacultyController.viewFaculties);
facultyRouter.post('/faculty/:id/delete', FacultyController.deleteFaculty);


facultyRouter.get('/faculty/:id/edit', FacultyController.editFaculty);
facultyRouter.post('/faculty/:id/update', FacultyController.updateFaculty);

module.exports = facultyRouter;