const express = require('express');
const routes = express.Router();
const EventController = require('./controller/eventController');


routes.use('/events', EventController);

module.exports = routes;