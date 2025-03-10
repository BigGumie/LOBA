const Projeto = require('../models/projeto');
const Tarefa = require('../models/tarefa');

exports.create = async (req, res) => {
  try {
    const projeto = await Projeto.create(req.body);
    res.status(201).json(projeto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getAll = async (req, res) => {
  try {
    const projetos = await Projeto.findAll();
    res.status(200).json(projetos);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.getOne = async (req, res) => {
  try {
    const projeto = await Projeto.findByPk(req.params.id);
    if (!projeto) {
      return res.status(404).json({ error: 'Projeto não encontrado' });
    }
    res.status(200).json(projeto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.update = async (req, res) => {
  try {
    const projeto = await Projeto.findByPk(req.params.id);
    if (!projeto) {
      return res.status(404).json({ error: 'Projeto não encontrado' });
    }
    await projeto.update(req.body);
    res.status(200).json(projeto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete = async (req, res) => {
  try {
    const projeto = await Projeto.findByPk(req.params.id);
    if (!projeto) {
      return res.status(404).json({ error: 'Projeto não encontrado' });
    }
    await projeto.destroy();
    res.status(204).end();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getProjetoComTarefas = async (req, res) => {
  try {
    const projeto = await Projeto.findByPk(req.params.id, {
      include: Tarefa
    });
    if (!projeto) {
      return res.status(404).json({ error: 'Projeto não encontrado' });
    }
    res.status(200).json(projeto);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


exports.getTarefaDoProjeto = async (req, res) => {
  try {
    const tarefa = await Tarefa.findOne({
      where: {
        id: req.params.tarefaId,
        projetoId: req.params.id
      }
    });
    if (!tarefa) {
      return res.status(404).json({ error: 'Tarefa não encontrada' });
    }
    res.status(200).json(tarefa);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

