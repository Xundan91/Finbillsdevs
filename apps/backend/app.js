import express from "express";
import authRoutes from "./routes/auth.routes.js";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(express.json());
app.use("/auth", authRoutes);

export default app;
