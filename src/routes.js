const { Router } = require('express');
const RecipientController = require('./app/controllers/RecipientController');
const SessionControlelr = require('./app/controllers/SessionController');
const authMiddleware = require('./app/middlewares/auth');

const routes = new Router();

routes.post('/login', SessionControlelr.store);
routes.use(authMiddleware);
routes.post('/recipients', RecipientController.store);
routes.put('/recipients', RecipientController.update);
module.exports = routes;
