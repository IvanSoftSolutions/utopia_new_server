import mongoose from 'mongoose';

const formulaSchema = mongoose.Schema(
    {
        nombre: {
            type: String,
            required: true,
        },
        orden: {
            type: Number,
            required: true,
        },
        porcentaje: {
            type: Number,
        },
        producto: {
            type: String,
            required: true,
        },
        temp: {
            type: Number,
        },
        tiempo: {
            type: Number,
        },
        ph: {
            type: Number,
        },
        cut: {
            type: Number,
        },
        observaciones: {
            type: String,
        },
    }
)

export const Formula = mongoose.model('formulas', formulaSchema);