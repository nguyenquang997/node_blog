
const express = require('express')
const routes = express.Router();

const meController = require('../app/controllers/MeController')

routes.get('/stored/courses', meController.storedCourses);
// routes.post('/store', courseController.store);
// routes.get('/:slug', courseController.show);

module.exports = routes;