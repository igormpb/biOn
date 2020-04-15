const express = require('express')
const router = express.Router();
const listEvents = require('./events/list-events');
const showEvent = require('./events/show-event');
const createEvent = require('./events/create-event');
const deleteEvent = require('./events/delete-event')

/**
 * createEvent - cria um evento
 */

router.post('/create', (req,res) => createEvent(req, res));

/**
 * listEvents - Busca todos os eventos
 */

router.get('/all', (req, res) => listEvents(req,res))

/**
 * showEvent - busca um evento por id
 */

router.get('/:id', (req,res) => showEvent(req, res))
/**
 *  DeleteEvent - remove um evento por id
 */

router.delete('/:id', (req,res) => deleteEvent(req,res))

module.exports = router;