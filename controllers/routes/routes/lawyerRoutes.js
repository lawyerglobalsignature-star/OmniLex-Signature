import express from "express";
import Lawyer from "../models/Lawyer.js";
import User from "../models/User.js";

const router = express.Router();

// Registrar abogado
router.post("/register", async (req, res) => {
  try {
    const {
      usuario,
      especialidades,
      añosExperiencia,
      descripcionProfesional,
      cedulaProfesional,
      pais,
      estado,
      ciudad,
      linkedin,
      webPersonal,
    } = req.body;

    const user = await User.findById(usuario);
    if (!user) return res.status(404).json({ msg: "Usuario no encontrado" });

    if (user.rol !== "abogado")
      return res
        .status(400)
        .json({ msg: "Este usuario no está configurado como abogado" });

    const lawyer = await Lawyer.create({
      usuario,
      especialidades,
      añosExperiencia,
      descripcionProfesional,
      cedulaProfesional,
      pais,
      estado,
      ciudad,
      linkedin,
      webPersonal,
    });

    res.json({ msg: "Abogado registrado correctamente", lawyer });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
});

// Obtener perfil de un abogado
router.get("/:id", async (req, res) => {
  try {
    const lawyer = await Lawyer.findById(req.params.id).populate("usuario");

    if (!lawyer)
      return res.status(404).json({ msg: "Abogado no encontrado" });

    res.json(lawyer);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
});

// Buscar abogados por especialidad
router.get("/especialidad/:esp", async (req, res) => {
  try {
    const lawyers = await Lawyer.find({
      especialidades: { $in: [req.params.esp] },
    }).populate("usuario");

    res.json(lawyers);
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor", error });
  }
});

export default router;
