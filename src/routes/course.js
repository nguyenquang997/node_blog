
const express = require('express')
const routes = express.Router();

const courseController = require('../app/controllers/CourseController')

routes.get('/create', courseController.create);
routes.post('/store', courseController.store);
routes.put('/:id', courseController.update);
routes.delete('/:id', courseController.destroy);
routes.get('/:id/edit', courseController.editCourse);
routes.get('/:slug', courseController.show);
// routes.get('/', courseController.index);

module.exports = routes;