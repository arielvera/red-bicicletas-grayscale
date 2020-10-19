var Bicicleta = require('../../models/bicicleta');

module.exports.list = function(req, res) {
    res.status(200).json({
        bicicletas: Bicicleta.bicicletas
    });
};

module.exports.create = function(req, res) {
    var id = Bicicleta.bicicletas.length + 1;
    var bici = new Bicicleta(id, req.body.color, req.body.modelo, [req.body.lat, req.body.lon]);

    // Add new Bici
    Bicicleta.add(bici);

    res.status(201).json({
        bicicleta: bici
    });
};

module.exports.update = function(req, res) {
    var bici = Bicicleta.findById(req.params.id)

    // Update bici
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.lon];

    res.status(200).json({
        bicicleta: bici
    });
};

module.exports.delete = function(req, res) {
    // Delete Bici
    Bicicleta.deleteById(req.params.id);

    res.status(204).send();
};