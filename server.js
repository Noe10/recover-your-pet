const express =  require('express');
const app = express();

const personRouter = require('./routes/personRouter.js');
const morgan  =  require('morgan');
const path = require('path');

//morgan
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}))
//view  enginer
app.set("views",path.join(__dirname, 'views'));
app.set('view engine','pug');
app.use(express.static(__dirname + '/public'));

//rutas
app.use('/', personRouter);
//app.use('/login' ,loginRouter),

app.listen(3000, ()=>{
    console.log('server listen :', 3000);
    
})