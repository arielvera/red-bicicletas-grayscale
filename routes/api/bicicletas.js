var express = require('express');
var router = express.Router();
var bicicletaApiController = require('../../controllers/api/bicicletaApi');

// list
router.get('/', bicicletaApiController.list);
// add
router.post('/create', bicicletaApiController.create);
// update
router.put('/:id/update', bicicletaApiController.update);
// delete
router.delete('/:id/delete', bicicletaApiController.delete);

module.exports = router;