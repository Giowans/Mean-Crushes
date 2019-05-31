const express = require('express');
const rutador = express.Router();

const crush_control = require('../controllers/crush-controller'); 

rutador.get('/', crush_control.getCrushes);
rutador.post('/', crush_control.createCrush);
rutador.get('/:id', crush_control.getCrush);
rutador.put('/:id', crush_control.editCrush);
rutador.delete('/:id', crush_control.deleteCrush);

module.exports = rutador;