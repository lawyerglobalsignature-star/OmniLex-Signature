import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

import userRoutes from "./routes/userRoutes.js";
import lawyerRoutes from "./routes/lawyerRoutes.js";
import signatureRoutes from "./routes/signatureRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Conexión a la base de datos
connectDB();

// Rutas principales
app.use("/api/users", userRoutes);
app.use("/api/lawyers", lawyerRoutes);
app.use("/api/signatures", signatureRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("OmniLex Signature API funcionando ✔");
});

// Puerto
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
