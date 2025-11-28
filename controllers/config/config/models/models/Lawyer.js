import mongoose from "mongoose";

const lawyerSchema = new mongoose.Schema(
  {
    usuario: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Información profesional
    especialidades: [{ type: String, required: true }],
    añosExperiencia: { type: Number, required: true },
    descripcionProfesional: { type: String },

    // Identidad legal del abogado
    cedulaProfesional: { type: String, required: true },
    pais: { type: String, required: true },
    estado: { type: String },
    ciudad: { type: String },

    // Rating y reputación
    calificacion: {
      type: Number,
      default: 5.0,
      min: 1,
      max: 5,
    },

    casosAtendidos: { type: Number, default: 0 },

    // Firma digital legal
    firmaDigitalURL: { type: String },

    // Redes opcionales
    linkedin: { type: String },
    webPersonal: { type: String },

    activo: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Lawyer", lawyerSchema);
