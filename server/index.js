const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const foodRoutes = require("./routes/foodRoutes.js");

dotenv.config();

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use("/api", foodRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected");
    app.listen(PORT, () => console.log(`🍔 Server running at http://localhost:${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err));
