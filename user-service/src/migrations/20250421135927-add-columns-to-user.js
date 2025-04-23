"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn("Users", "age", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.addColumn("Users", "gender", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("Users", "date_of_birth", {
      type: Sequelize.DATE,
      allowNull: true,
    });

    await queryInterface.addColumn("Users", "height", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.addColumn("Users", "weight", {
      type: Sequelize.INTEGER,
      allowNull: true,
    });

    await queryInterface.addColumn("Users", "height_unit", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("Users", "weight_unit", {
      type: Sequelize.STRING,
      allowNull: true,
    });

    await queryInterface.addColumn("Users", "profile_picture", {
      type: Sequelize.STRING,
      allowNull: true,
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn("Users", "age");
    await queryInterface.removeColumn("Users", "gender");
    await queryInterface.removeColumn("Users", "date_of_birth");
    await queryInterface.removeColumn("Users", "height");
    await queryInterface.removeColumn("Users", "weight");
    await queryInterface.removeColumn("Users", "height_unit");
    await queryInterface.removeColumn("Users", "weight_unit");
    await queryInterface.removeColumn("Users", "profile_picture");
  },
};
