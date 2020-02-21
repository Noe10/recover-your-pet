const {
    connectionLimit,
    localhost,
    user,
    password,
    database
} = require('./key.js');
const mysql = require('mysql');
const util = require('util');

const pool = mysql.createPool({
    connectionLimit,
    localhost,
    user,
    password,
    database

})
pool.getConnection((err, connection) => {
    if (err) {
        console.log('connection error ');

    }
   if(connection){
       connection.release()
   }

   return
})

pool.query = util.promisify(pool.query);
module.exports = pool;