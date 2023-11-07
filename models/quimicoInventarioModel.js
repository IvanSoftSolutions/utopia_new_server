import mongoose from "mongoose";

const quimicoInventarioSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        productor: {
            type: String,
            required: true,
        },
        presentacion: {
            type: String,
            required: true,
        },
        cantidad: {
            type: Number,
            required: true,
        },
        peso: {
            type: Number,
            required: true,
        },
        precio: {
            type: Number,
            required: true,
        },
        divisa: {
            type: String,
            required: true,
        },
    }
)

export const QuimicoInventario = mongoose.model('quimico_inv', quimicoInventarioSchema, 'quimico_inv');