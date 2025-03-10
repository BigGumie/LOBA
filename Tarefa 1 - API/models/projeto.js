const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class Projeto extends Model {}

Projeto.init({
  nome: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING(150),
    allowNull: false
  }
}, {
  sequelize,
  modelName: 'Projeto',
  timestamps: false,
  createdAt: false,  
  updatedAt: false   
});

module.exports = Projeto;
