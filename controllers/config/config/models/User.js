import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    nombre: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

    // Tipo de usuario
    rol: {
      type: String,
      enum: ["cliente", "abogado", "admin"],
      default: "cliente",
    },

    // Solo si es abogado
    especialidad: { type: String },
    cedulaProfesional: { type: String },
    pais: { type: String },
    experiencia: { type: Number },

    // Datos del cliente
    telefono: { type: String },

    // Estado de cuenta
    activo: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("User", userSchema);
