const Crush = require('../models/crush');
const crush_controller = {};
//Funciones del controlador para el ruteo
crush_controller.getCrushes = async (req, res) => {
   const crushes = await Crush.find();
   res.json(crushes);
};

crush_controller.createCrush = async (req, res) => {
    const crushito = new Crush({
        nombre: req.body.nombre,
        ocupacion: req.body.ocupacion,
        edad: req.body.edad,
        personalidad: req.body.personalidad,
        razon: req.body.razon
    });
    const aux = await crushito.save();
    res.json({
        estado: 'Crush guardado: ', aux
    });
};

crush_controller.getCrush = async (req, res) => {
    console.log(req.params);
    const crush_encontrado = await Crush.findById(req.params);
    res.json(crush_encontrado);
}
crush_controller.editCrush = async (req, res) => {
    const { id } = req.params;
    const crushito = {
        nombre: req.body.nombre,
        ocupacion: req.body.ocupacion,
        edad: req.body.edad,
        personalidad: req.body.personalidad,
        razon: req.body.razon
    }
    console.log("esto es: ", req.body.nombre);
    await Crush.findByIdAndUpdate(id, {$set: crushito}, {new: true});
    res.json({estado: 'crush actualizado', crushito});
}
crush_controller.deleteCrush = async (req, res) =>{
    await Crush.findByIdAndRemove(req.params.id);
    res.json({estado: 'Crush Eliminando'});
}
module.exports = crush_controller;