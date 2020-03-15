const { Router } = require('express');
const RecipientController = require('./app/controllers/RecipientController');

const routes = new Router();

routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);
module.exports = routes;
