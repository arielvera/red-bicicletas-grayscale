var map = L.map('mapid').setView([-31.417, -64.183], 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

/*L.marker([-31.417, -64.183]).addTo(map)
    .bindPopup('Plaza San Martin')
    .openPopup();*/

$.ajax({
    dataType: 'json',
    url: 'api/bicicletas',
    success: function(response) {
        response.bicicletas.forEach(function(bici) {
            L.marker(bici.ubicacion, { title: bici.id.toString()})
                .addTo(map)
                .bindPopup(bici.color + ' - ' + bici.modelo);
        });
    }
});
