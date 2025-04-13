import { Sequelize } from "sequelize";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: `.env.${process.env.ENV_MODE || "local"}` });

const sequelize = new Sequelize(
  process.env.POSTGRES_DB as string,
  process.env.POSTGRES_USER as string,
  process.env.POSTGRES_PASSWORD as string,
  {
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  }
);

export default sequelize;
