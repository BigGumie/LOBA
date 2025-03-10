module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Tarefas', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        titulo: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        descricao: {
          type: Sequelize.STRING(150),
          allowNull: false
        },
        status: {
          type: Sequelize.STRING,
          allowNull: false,
          defaultValue: 'pendente'
        },
        projetoId: {
          type: Sequelize.INTEGER,
          references: {
            model: 'Projetos',
            key: 'id'
          }
        }
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('Tarefas');
    }
  };
  