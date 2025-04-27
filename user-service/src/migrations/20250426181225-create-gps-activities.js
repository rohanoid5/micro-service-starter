"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Activities", {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      current_time: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      pace: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      elevation: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      distance: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      heartbeat: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      latitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
      },
      longitude: {
        type: Sequelize.FLOAT,
        allowNull: true,
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
    await queryInterface.dropTable("GPSTrackings");
  },
};
