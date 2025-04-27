import express from "express";
import dotenv from "dotenv";
import sequelize from "./config/config";
import userRoutes from "./routes/userRoutes";
import authRoutes from "./routes/authRoutes";
import activityRoutes from "./routes/activityRoutes";
import gpsTrackingRoutes from "./routes/gpsTrackingRoutes";

dotenv.config();

const app = express();
app.use(express.json());
app.use("/api", userRoutes);
app.use("/api", activityRoutes);
app.use("/api", gpsTrackingRoutes);
app.use("/api/auth", authRoutes);

const connectWithRetry = async (retries = 5, delay = 3000) => {
  while (retries) {
    try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log("✅ Database connected & synced");

      const port = process.env.PORT || 3001;
      app.listen(port, () => {
        console.log(`🚀 Server listening on port ${port}`);
      });
      return;
    } catch (err) {
      console.error("❌ Database connection failed, retrying in 3s...", err);
      retries -= 1;
      await new Promise((res) => setTimeout(res, delay));
    }
  }
  console.error("🚨 All retries failed. Exiting.");
  process.exit(1);
};

connectWithRetry();
