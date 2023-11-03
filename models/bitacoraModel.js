import mongoose from "mongoose";

const bitacoraSchema = mongoose.Schema(
    {
        // usuario: {
        //     type: String,
        //     required: true,
        // },
        fecha: {
            type: Date,
            required: true,
        },
        formula: {
            type: String,
            required: true,
        },
        peso: {
            type: Number,
            required: true,
        },
        grosor: {
            type: Number,
            required: true,
        },
        material: {
            type: String,
            required: true,
        },
        detalles: {
            type: String,
        },
    }
)

export const Bitacora = mongoose.model('bitacora_reportes', bitacoraSchema);