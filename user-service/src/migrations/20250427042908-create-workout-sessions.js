"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("WorkoutSessions", {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      current_time: {
        type: Sequelize.DATE,
      },
      title: {
        type: Sequelize.STRING,
      },
      sets: {
        type: Sequelize.INTEGER,
      },
      repetitions: {
        type: Sequelize.ARRAY(Sequelize.INTEGER),
      },
      duration: {
        type: Sequelize.INTEGER,
      },
      perceived_difficulty: {
        type: Sequelize.STRING,
      },
      average_heartbeat: {
        type: Sequelize.INTEGER,
      },
      max_heartbeat: {
        type: Sequelize.INTEGER,
      },
      activity_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Activities",
          key: "id",
        },
        onDelete: "CASCADE",
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE,
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable("WorkoutSessions");
  },
};
