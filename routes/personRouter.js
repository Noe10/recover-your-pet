const express = require('express');
const router = express.Router();

const personCtrl = require('../controllers/personControllers.js');

router.get('/register',personCtrl.renderGetAllPerson);
//router.get('/', personCtrl.renderGetAllPerson);
//router.get('/getAllPerson', personCtrl.GetPersons);

module.exports = router;