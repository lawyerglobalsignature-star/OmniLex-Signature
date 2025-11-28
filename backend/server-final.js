import express from "express";
import cors from "cors";
import { connectDB } from "./backend/config/db.js";

import userRoutes from "./backend/routes/userRoutes.js";
import lawyerRoutes from "./backend/routes/lawyerRoutes.js";
import signatureRoutes from "./backend/routes/signatureRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Conectar a MongoDB
connectDB();

// Rutas principales
app.use("/api/users", userRoutes);
app.use("/api/lawyers", lawyerRoutes);
app.use("/api/signatures", signatureRoutes);

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("OmniLex Signature API funcionando correctamente ✔");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});
