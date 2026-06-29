import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import gameRoutes from "./routes/gameRoutes.js";
import requestRoutes from "./routes/requestRoutes.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Root test route
app.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "Indonesia Game Rating System (IGRS) Backend API is running.",
  });
});

// API Routes
app.use("/api/games", gameRoutes);
app.use("/api", requestRoutes);

// 404 Route handler
app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    message: `Route ${req.originalUrl} tidak ditemukan.`,
  });
});

// Error handling middleware
app.use(errorHandler);

// Start server
app.listen(PORT, () => {
  console.log(`=================================================`);
  console.log(` Server berjalan di: http://localhost:${PORT}`);
  console.log(`=================================================`);
});
