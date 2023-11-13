import mongoose from "mongoose";

const maquilasVentasSchema = mongoose.Schema(
    {
        folio: {
            type: String,
            required: true,
        },
        fecha: {
            type: String,
            required: true,
        },
        cliente: {
            type: String,
            required: true,
        },
        concepto: {
            type: String,
            required: true,
        },
        cantidad: {
            type: Number,
        },
        wholeHidesSides: {
            type: String,
            required: true,
        },
        precio: {
            type: Number,
            required: true,
        },
        totalPesos: {
            type: Number,
            required: true,
        },
        tasaCambio: {
            type: Number,
            required: true,
        },
        totalUsd: {
            type: Number,
            required: true,
        },
        observaciones: {
            type: String,
        },
    }
)

export const MaquilasVentas = mongoose.model('maquilas_ventas', maquilasVentasSchema, 'maquilas_ventas');