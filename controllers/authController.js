<<<<<<< HEAD
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

=======
const Usuario = require('../models/usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { sendEmail } = require('../services/mailService'); 

exports.register = async (req, res) => {
  try {
>>>>>>> fc39bcadf68ce86645354c2a43de2d6369912155
    const { nome, email, senha } = req.body;
    const hashedPassword = await bcrypt.hash(senha, 10);
    const usuario = await Usuario.create({ nome, email, senha: hashedPassword });

    const token = jwt.sign({ id: usuario.id }, 'LOBA');

<<<<<<< HEAD
    res.status(201).json({ message: 'Usuário registrado com sucesso', token });
=======
    await sendEmail(email, 'Bem vindo a minha API criada na LOBA', 'Obrigado pelo o registro!\nToken: ' + token);

    res.status(201).json({ message: 'Usuário registrado com sucesso' });
>>>>>>> fc39bcadf68ce86645354c2a43de2d6369912155
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
<<<<<<< HEAD
    const { error } = loginSchema.validate(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
    }

=======
>>>>>>> fc39bcadf68ce86645354c2a43de2d6369912155
    const { email, senha } = req.body;
    const usuario = await Usuario.findOne({ where: { email } });
    if (!usuario) {
      return res.status(404).json({ error: 'Usuário não encontrado' });
    }
    const isPasswordValid = await bcrypt.compare(senha, usuario.senha);
    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Senha inválida' });
    }

<<<<<<< HEAD
    const token = jwt.sign({ id: usuario.id }, 'LOBA');
=======
>>>>>>> fc39bcadf68ce86645354c2a43de2d6369912155
    res.status(200).json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};