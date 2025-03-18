module.exports = {
    up: async (queryInterface, Sequelize) => {
      await queryInterface.createTable('Projetos', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        nome: {
          type: Sequelize.STRING(50),
          allowNull: false
        },
        descricao: {
          type: Sequelize.STRING(150),
          allowNull: false
        }
      });
    },
    down: async (queryInterface) => {
      await queryInterface.dropTable('Projetos');
    }
  };
  