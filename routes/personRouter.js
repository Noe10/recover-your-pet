const express = require('express');
const router = express.Router();

const personCtrl = require('../controllers/personControllers.js');

router.get('/login',personCtrl.login);
router.get('/person', personCtrl.GetPersons);
//router.get('/getAllPerson', personCtrl.GetPersons);

module.exports = router;