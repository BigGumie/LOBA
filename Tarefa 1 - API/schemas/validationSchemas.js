const Joi = require('joi');

const registerSchema = Joi.object({
  nome: Joi.string().min(3).max(30).required(),
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required()
});

const loginSchema = Joi.object({
  email: Joi.string().email().required(),
  senha: Joi.string().min(6).required()
});

module.exports = {
  registerSchema,
  loginSchema
};