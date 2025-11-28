import mongoose from "mongoose";

const signatureSchema = new mongoose.Schema(
  {
    abogado: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lawyer",
      required: true,
    },

    cliente: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    documentoURL: {
      type: String,
      required: true,
    },

    firmaAbogadoURL: {
      type: String,
      required: true,
    },

    firmaClienteURL: {
      type: String,
      required: true,
    },

    hashVerificacion: {
      type: String,
      required: true,
      unique: true,
    },

    fechaFirma: {
      type: Date,
      default: Date.now,
    },

    estado: {
      type: String,
      enum: ["pendiente", "firmado", "rechazado"],
      default: "pendiente",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Signature", signatureSchema);
