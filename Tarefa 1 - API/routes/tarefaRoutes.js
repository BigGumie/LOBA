const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

router.get('/', tarefaController.getAll);
router.post('/', tarefaController.create);
router.get('/:id', tarefaController.getOne);
router.put('/:id', tarefaController.update);
router.delete('/:id', tarefaController.delete);

module.exports = router;