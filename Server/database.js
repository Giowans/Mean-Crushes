const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mean-crushesdb';
mongoose.connect(URI)
    .then(db => console.log('DB conectada'))
    .catch(e => console.error('Fallo en la conexion con la db :( ... ', e));

module.exports = mongoose;