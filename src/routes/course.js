
const express = require('express')
const routes = express.Router();

const courseController = require('../app/controllers/CourseController')

routes.get('/create', courseController.create);
routes.post('/store', courseController.store);
routes.get('/:slug', courseController.show);
// routes.get('/', courseController.index);

module.exports = routes;