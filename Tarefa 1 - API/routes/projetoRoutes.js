const express = require('express');
const router = express.Router();
const projetoController = require('../controllers/projetoController');

router.get('/', projetoController.getAll);
router.post('/', projetoController.create);
router.get('/:id', projetoController.getOne);
router.put('/:id', projetoController.update);
router.delete('/:id', projetoController.delete);

router.get('/:id/tarefas', projetoController.getProjetoComTarefas);
router.get('/:id/tarefas/:tarefaId', projetoController.getTarefaDoProjeto);

module.exports = router;
