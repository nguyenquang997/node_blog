
const express = require('express')
const routes = express.Router();

const siteController = require('../app/controllers/SiteController')

routes.get('/home', siteController.home);
routes.post('/stored', siteController.actionLogin);
routes.get('/', siteController.login);

module.exports = routes;