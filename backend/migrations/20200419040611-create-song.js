
module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Songs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    name: {
      type: Sequelize.STRING
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE
    },
    AlbumId: {
      type: Sequelize.INTEGER,
      onDelete: 'CASCADE',
      allowNull: false,
      references: {
        model: 'Albums',
        key: 'id'
      }
    }
  }),
  down: (queryInterface, Sequelize) => queryInterface.dropTable('Songs')
};
