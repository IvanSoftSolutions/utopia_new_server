import mongoose from "mongoose";

const importacionesSchema = mongoose.Schema(
    {
        factura: {
            type: Number,
            required: true
        },
        contrato: {
            type: String,
            required: true
        },
        no: {
            type: String,
            required: true
        },
        camion: {
            type: String,
            required: true
        },
        kind: {
            type: String,
            required: true
        },
        pallets: {
            type: Number,
            required: true
        },
        valorUSD: {
            type: Number,
            required: true
        },
        hides: {
            type: Number,
            required: true
        },
        peso: {
            type: Number,
            required: true
        },
        eta: {
            type: String,
            required: true
        },
        truck: {
            type: String,
        },
        insurance: {
            type: Number,
            required: true
        },
        maquila: {
            type: String,
            required: true
        },
        partida: {
            type: String,
            required: true
        },
        entrada: {
            type: String,
            required: true
        },
        split: {
            type: String,
        },
        final: {
            type: String,
        },
        remojo: {
            type: String,
        },
        dividido: {
            type: String,
        },
        entrega: {
            type: String,
        },
        tipo: {
            type: String,
            required: true
        },
        observaciones: {
            type: String,
        },
        costoProceso: {
            type: Number,
        },
        facturaPagada: {
            type: Boolean,
        },
        numeroFactura: {
            type: String,
        },
    }
)

export const Importacion = mongoose.model('importaciones', importacionesSchema);