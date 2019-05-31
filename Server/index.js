const express = require('express');
const morgan = require('morgan');
const app= express();
const cors= require('cors');
//importamos la conexion a las base de datos desde database.js
const { mongoose } = require('./database');

//configuraciones del servidor
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));

//Rutas (Routes)
app.use('/api/crushes', require('./routes/crushes-routes'));

//Iniciando el servidor
app.listen(app.get('port'), () => 
{
    console.log('Server on port: ', app.get('port'));
});