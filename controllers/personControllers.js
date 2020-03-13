const pool = require('../config/conn.js');
const personCtrl = {};
//redirccionando a person
personCtrl.login = (req, res) =>{
    res.render('../views/index.pug');
   
}
personCtrl.register = (req, res) =>{
    res.render('../views/_sections/_register.pug');
}
personCtrl.GetPersons = async (req, res ) =>{
  try {
    let data= await pool.query('SELECT * FROM person');
    console.log(data);
    
    res.render('../views/person.pug',{"personCtrl":data});
  
  } catch (error) {
      console.log(error);
      
  }
}

personCtrl.renderAddPerson = (req, res) => {
    
    res.render('person/add');
}

personCtrl.addPerson = (req, res) => {

}

module.exports = personCtrl;