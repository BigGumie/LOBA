const express = require('express');
const router = express.Router();
const tarefaController = require('../controllers/tarefaController');

<<<<<<< HEAD
/**
 * @swagger
 * tags:
 *   name: Tarefas
 *   description: Endpoints relacionados a tarefas
 */

/**
 * @swagger
 * /tarefas:
 *   get:
 *     summary: Retorna a lista de tarefas
 *     tags: [Tarefas]
 *     responses:
 *       200:
 *         description: Lista de tarefas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefa'
 */
router.get('/', tarefaController.getAll);

/**
 * @swagger
 * /tarefas:
 *   post:
 *     summary: Cria uma nova tarefa
 *     tags: [Tarefas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da tarefa
 *               descricao:
 *                 type: string
 *                 description: Descrição da tarefa
 *               projetoId:
 *                 type: string
 *                 description: ID do projeto associado
 *     responses:
 *       201:
 *         description: Tarefa criada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarefa'
 */
router.post('/', tarefaController.create);

/**
 * @swagger
 * /tarefas/{id}:
 *   get:
 *     summary: Retorna uma tarefa pelo ID
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefa encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarefa'
 */
router.get('/:id', tarefaController.getOne);

/**
 * @swagger
 * /tarefas/{id}:
 *   put:
 *     summary: Atualiza uma tarefa pelo ID
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome da tarefa
 *               descricao:
 *                 type: string
 *                 description: Descrição da tarefa
 *               projetoId:
 *                 type: string
 *                 description: ID do projeto associado
 *     responses:
 *       200:
 *         description: Tarefa atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tarefa'
 */
router.put('/:id', tarefaController.update);

/**
 * @swagger
 * /tarefas/{id}:
 *   delete:
 *     summary: Deleta uma tarefa pelo ID
 *     tags: [Tarefas]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID da tarefa
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Tarefa deletada
 */
=======
router.get('/', tarefaController.getAll);
router.post('/', tarefaController.create);
router.get('/:id', tarefaController.getOne);
router.put('/:id', tarefaController.update);
>>>>>>> fc39bcadf68ce86645354c2a43de2d6369912155
router.delete('/:id', tarefaController.delete);

module.exports = router;