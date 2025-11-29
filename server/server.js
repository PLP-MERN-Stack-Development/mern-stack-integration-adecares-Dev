// server/server.js
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

// Routes
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Root route to test localhost
app.get("/", (req, res) => {
  res.send("Server is running!");
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);

// MongoDB Atlas connection
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("MongoDB Atlas connected");
    console.log(`Server running at http://localhost:${PORT}`);
    app.listen(PORT);
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });
