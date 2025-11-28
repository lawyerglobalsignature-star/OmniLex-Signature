const express = require("express");
const router = express.Router();
const Signature = require("../models/Signature");

// 👉 Crear una nueva firma
router.post("/", async (req, res) => {
  try {
    const signature = new Signature(req.body);
    await signature.save();
    res.json({ message: "Firma creada correctamente", signature });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 👉 Obtener todas las firmas
router.get("/", async (req, res) => {
  try {
    const firmas = await Signature.find();
    res.json(firmas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// 👉 Obtener una firma por ID
router.get("/:id", async (req, res) => {
  try {
    const firma = await Signature.findById(req.params.id);
    res.json(firma);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
Create signatureRoutes.js
