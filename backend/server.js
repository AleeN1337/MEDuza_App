const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const authRoutes = require("./routes/authRoutes");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Rejestracja i logowanie
app.use("/api/auth", authRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ Połączono z MongoDB");
    app.listen(PORT, () => console.log(`🚀 Serwer działa na porcie ${PORT}`));
  })
  .catch((err) => console.error("❌ Błąd połączenia z MongoDB:", err));
