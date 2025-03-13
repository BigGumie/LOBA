const { registerSchema, loginSchema } = require('../schemas/validationSchemas');
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  try {
    const { error } = registerSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { nome, email, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);
    const usuario = await Usuario.create({ nome, email, senha: hashedPassword });

    const token = jwt.sign({ id: usuario.id }, 'LOBA');

    res.status(201).json({ message: 'Usuário registrado com sucesso', token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    const isPasswordValid = await bcrypt.compare(senha, usuario.senha);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

    const token = jwt.sign({ id: usuario.id }, 'LOBA');
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};