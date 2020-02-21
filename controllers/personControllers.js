const pool = require('../config/conn.js');
const personCtrl = {};
//redirccionando a person
personCtrl.renderGetAllPerson = (req, res) =>{
    res.render('../views/index.pug');
   
}
personCtrl.GetPersons = async (req, res ) =>{
     await pool.query('SELECT * FROM person');
    return res.render('persons');
}

personCtrl.renderAddPerson = (req, res) => {
    res.render('person/add');
}

personCtrl.addPerson = (req, res) => {

}

module.exports = personCtrl;