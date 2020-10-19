var express = require('express');
var router = express.Router();
var bicicletaController = require('../controllers/bicicleta');

// list
router.get('/', bicicletaController.list);
// add
router.get('/create', bicicletaController.create_get);
router.post('/create', bicicletaController.create_post);
// update
router.get('/:id/update', bicicletaController.update_get);
router.post('/:id/update', bicicletaController.update_post);
// delete
router.post('/:id/delete', bicicletaController.delete_post);

module.exports = router;