import mongoose from "mongoose";

const maquilasConceptosSchema = mongoose.Schema(
    {
        concepto: {
            type: String,
            required: true,
        },
        unidad: {
            type: String,
            required: true,
        },
        tipo: {
            type: String,
            required: true,
        },
        precio: {
            type: Number,
            required: true,
        },
    }
)

export const MaquilasConceptos = mongoose.model('maquilas_conceptos', maquilasConceptosSchema, 'maquilas_conceptos');