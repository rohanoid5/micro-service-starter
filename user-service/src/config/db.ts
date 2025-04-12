import { Sequelize } from "sequelize";

const sequelize = new Sequelize(
  process.env.POSTGRES_DB as string,
  process.env.POSTGRES_USER as string,
  process.env.POSTGRES_PASSWORD,
  {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  },
);

export default sequelize;
