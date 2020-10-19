var Bicicleta = require('../models/bicicleta');

module.exports.list = function(req, res) {
    res.render('bicicletas/index', { bicicletas: Bicicleta.bicicletas });
};

module.exports.create_get = function(req, res) {
    res.render('bicicletas/create');
};

module.exports.create_post = function(req, res) {
    var id = Bicicleta.bicicletas.length + 1;
    var bici = new Bicicleta(id, req.body.color, req.body.modelo, [req.body.lat, req.body.lon]);

    // Add new Bici
    Bicicleta.add(bici);

    // Redirect to List page
    res.redirect('/bicicletas');
};

module.exports.update_get = function(req, res) {
    var bici = Bicicleta.findById(req.params.id);

    res.render('bicicletas/update', { bici: bici });
};

module.exports.update_post = function(req, res) {
    var bici = Bicicleta.findById(req.params.id)

    // Update bici
    bici.color = req.body.color;
    bici.modelo = req.body.modelo;
    bici.ubicacion = [req.body.lat, req.body.lon];

    // Redirect to List page
    res.redirect('/bicicletas');
};

module.exports.delete_post = function(req, res) {
    // Delete Bici
    Bicicleta.deleteById(req.params.id);

    // Redirect to List page
    res.redirect('/bicicletas');
};