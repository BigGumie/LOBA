const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Projeto = require('./projeto');

class Tarefa extends Model {}

Tarefa.init({
  titulo: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  descricao: {
    type: DataTypes.STRING(150),
    allowNull: false
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'pendente'
  }
}, {
  sequelize,
  modelName: 'Tarefa',
  timestamps: false, 
});

Tarefa.belongsTo(Projeto, { foreignKey: 'projetoId' });
Projeto.hasMany(Tarefa, { foreignKey: 'projetoId' });

module.exports = Tarefa;
