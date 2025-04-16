import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.ENV_MODE || "local"}` });

export = {
  development: {
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.POSTGRES_DB,
    host: process.env.POSTGRES_HOST,
    dialect: "postgres",
  },
};
