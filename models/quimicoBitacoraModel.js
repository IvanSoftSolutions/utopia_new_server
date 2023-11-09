import mongoose from "mongoose";

const quimicoBitacoraSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        cantidad: {
            type: Number,
            required: true,
        },
        fecha: {
            type: String,
            required: true,
        },
        entradaSalida: {
            type: String,
            required: true,
        },
    }
)

export const QuimicoBitacora = mongoose.model('quimico_bitacora', quimicoBitacoraSchema, 'quimico_bitacora');