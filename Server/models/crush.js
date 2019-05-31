const mongoose = require('mongoose');
const { Schema } = mongoose;

const crush_schema = new Schema ({
    nombre: {type: String, required: true},
    ocupacion: {type: String, required: true},
    edad: {type: Number, required: true},
    personalidad: {type: String, required: true},
    razon: {type: String, required: true}
});

module.exports = mongoose.model('Crush', crush_schema);
