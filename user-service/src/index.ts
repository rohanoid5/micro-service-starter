import express from "express";
import dotenv from "dotenv";
import userRoutes from "./routes/userRoutes";
import sequelize from "./config/db";

dotenv.config();
const app = express();

app.use(express.json());
app.use("/api", userRoutes);

// DB Sync
sequelize.sync().then(() => {
  console.log("Database connected & synced");
  app.listen(process.env.PORT, () =>
    console.log(`User Service running on port ${process.env.PORT}`),
  );
});
