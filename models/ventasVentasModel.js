import mongoose from "mongoose";

const ventasVentasSchema = mongoose.Schema(
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
        piezas: {
            type: Number,
            required: true,
        },
        wholeHidesSides: {
            type: String,
            required: true,
        },
        cantidad: {
            type: Number,
        },
        unidad: {
            type: String,
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
            required: true,
        },
    }
)

export const VentasVentas = mongoose.model('ventas_ventas', ventasVentasSchema, 'ventas_ventas');