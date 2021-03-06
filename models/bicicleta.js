function Bicicleta(id, color, modelo, ubicacion) {
    this.id = id;
    this.color = color;
    this.modelo = modelo;
    this.ubicacion = ubicacion;
}

Bicicleta.prototype.toString = function () {
    return 'id: ' + this.id + ' | color: ' + this.color + ', modelo: ' + this.modelo;
}

Bicicleta.bicicletas = [];

Bicicleta.add = function(bici) {
    Bicicleta.bicicletas.push(bici);
}

Bicicleta.deleteById = function(id) {
    var index = Bicicleta.findIndexById(id);

    if (index >= 0) {
        Bicicleta.bicicletas.splice(index, 1);
    }
}

Bicicleta.findIndexById = function(id) {
    var bici = Bicicleta.findById(id);

    return Bicicleta.bicicletas.indexOf(bici);
}

Bicicleta.findById = function(id) {
    return Bicicleta.bicicletas.find(function(value) {
        return parseInt(value.id) === parseInt(id);
    });
}

var bici1 = new Bicicleta(1, 'rojo', 'raptor', [-31.4158007,-64.1825873]);
var bici2 = new Bicicleta(2, 'azul', 'ragnarok', [-31.4153326,-64.1826589]);
var bici3 = new Bicicleta(3, 'verde', 'predator', [-31.4164758,-64.1834184]);

Bicicleta.bicicletas.push(bici1);
Bicicleta.bicicletas.push(bici2);
Bicicleta.bicicletas.push(bici3);

module.exports = Bicicleta;