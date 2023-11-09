import mongoose from 'mongoose';

const formulasTotalesSchema = mongoose.Schema(
    {
        quimicoA: {
            type: Number
        },
        quimicoB: {
            type: Number
        },
        quimicoD: {
            type: Number
        },
        quimicoE: {
            type: Number
        },
        quimicoF: {
            type: Number
        },
        quimicoG: {
            type: Number
        },
        quimicoH: {
            type: Number
        },
        quimicoI: {
            type: Number
        },
        quimicoJ: {
            type: Number
        },
        quimicoK: {
            type: Number
        },
        quimicoL: {
            type: Number
        },
        quimicoM: {
            type: Number
        },
        quimicoN: {
            type: Number
        },
        quimicoO: {
            type: Number
        },
        quimicoP: {
            type: Number
        },
        quimicoQ: {
            type: Number
        },
        quimicoR: {
            type: Number
        },
        quimicoS: {
            type: Number
        },
        quimicoT: {
            type: Number
        },
        quimicoU: {
            type: Number
        },
        quimicoV: {
            type: Number
        },
        quimicoW: {
            type: Number
        },
        quimicoX: {
            type: Number
        },
        quimicoY: {
            type: Number
        },
        quimicoZ: {
            type: Number
        },
    }
)

export const FormulasTotales = mongoose.model('formulas_totales', formulasTotalesSchema, 'formulas_totales');