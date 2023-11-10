import mongoose from "mongoose";

const pielesInventarioSchema = mongoose.Schema(
    {
        articulo: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        tipo: {
            type: String,
            required: true
        },
        kind: {
            type: String,
            required: true
        },
        wholesHide: {
            type: Number,
            required: true
        },
        sides: {
            type: Number,
            required: true
        },
        shrunkenShoulder: {
            type: Number,
            required: true
        },
        doubleButt: {
            type: Number,
            required: true
        },
        total: {
            type: Number,
            required: true
        },
        grado: {
            type: String,
            required: true
        },
        ubicacion: {
            type: String,
        },
        pallet: {
            type: Number,
            required: true
        },
        locacion: {
            type: String,
            required: true
        },
        costoHide: {
            type: Number,
        },
        piezasCosto: {
            type: Number,
        },
        hongo: {
            type: Boolean,
        },
        shaved: {
            type: Boolean,
        },
        grosor: {
            type: String,
        },
        lavado: {
            type: Boolean,
        },
        rechazados: {
            type: Boolean,
        },
        upoTruck: {
            type: String,
        },
        fecha: {
            type: String,
        },
        evaluador: {
            type: String,
        },
        observaciones: {
            type: String,
        },
        modificaciones: {
            type: Boolean,
        },
        evaluado: {
            type: Boolean,
        },
    }
)

export const PielesInventario = mongoose.model('pieles_inv', pielesInventarioSchema, 'pieles_inv');