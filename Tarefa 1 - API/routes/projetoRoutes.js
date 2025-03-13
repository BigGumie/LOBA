const express = require('express');
const router = express.Router();
const projetoController = require('../controllers/projetoController');

/**
 * @swagger
 * tags:
 *   name: Projetos
 *   description: Endpoints relacionados a projetos
 */

/**
 * @swagger
 * /projetos:
 *   get:
 *     summary: Retorna a lista de projetos
 *     tags: [Projetos]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de projetos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Projeto'
 */
router.get('/', projetoController.getAll);

/**
 * @swagger
 * /projetos:
 *   post:
 *     summary: Cria um novo projeto
 *     tags: [Projetos]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *                 description: Nome do projeto
 *               descricao:
 *                 type: string
 *                 description: Descrição do projeto
 *     responses:
 *       201:
 *         description: Projeto criado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Projeto'
 */
router.post('/', projetoController.create);

/**
 * @swagger
 * /projetos/{id}:
 *   get:
 *     summary: Retorna um projeto pelo ID
 *     tags: [Projetos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do projeto
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Projeto encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Projeto'
 */
router.get('/:id', projetoController.getOne);

/**
 * @swagger
 * /projetos/{id}:
 *   put:
 *     summary: Atualiza um projeto pelo ID
 *     tags: [Projetos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do projeto
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
 *                 description: Nome do projeto
 *               descricao:
 *                 type: string
 *                 description: Descrição do projeto
 *     responses:
 *       200:
 *         description: Projeto atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Projeto'
 */
router.put('/:id', projetoController.update);

/**
 * @swagger
 * /projetos/{id}:
 *   delete:
 *     summary: Deleta um projeto pelo ID
 *     tags: [Projetos]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do projeto
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Projeto deletado
 */
router.delete('/:id', projetoController.delete);

/**
 * @swagger
 * /projetos/{id}/tarefas:
 *   get:
 *     summary: Retorna as tarefas de um projeto pelo ID do projeto
 *     tags: [Projetos]
 *     description: Retorna uma lista de todas as tarefas associadas a um projeto específico pelo ID do projeto.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do projeto
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Lista de tarefas do projeto
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Tarefa'
 */
router.get('/:id/tarefas', projetoController.getProjetoComTarefas);

/**
 * @swagger
 * /projetos/{id}/tarefas/{tarefaId}:
 *   get:
 *     summary: Retorna uma tarefa específica de um projeto pelo ID do projeto e ID da tarefa
 *     tags: [Projetos]
 *     description: Retorna os detalhes de uma tarefa específica associada a um projeto pelo ID do projeto e ID da tarefa.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID do projeto
 *         schema:
 *           type: string
 *       - in: path
 *         name: tarefaId
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
router.get('/:id/tarefas/:tarefaId', projetoController.getTarefaDoProjeto);

module.exports = router;
