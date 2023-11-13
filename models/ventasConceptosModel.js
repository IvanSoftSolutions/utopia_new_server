import mongoose from "mongoose";

const ventasConceptosSchema = mongoose.Schema(
    {
        concepto: {
            type: String,
            required: true,
        },
        unidad: {
            type: String,
            required: true,
        },
        seleccion: {
            type: String,
            required: true,
        },
        tipo: {
            type: String,
            required: true,
        },
    }
)

export const VentasConceptos = mongoose.model('ventas_conceptos', ventasConceptosSchema, 'ventas_conceptos');