import mongoose from "mongoose";

const engraseSchema = mongoose.Schema(
    {
        fechaEngrase: {
            type: String,
            required: true,
        },
        numeroCarga: {
            type: Number,
            required: true
        },
        cuero: {
            type: String,
            required: true
        },
        camionPartida: {
            type: Number,
            required: true
        },
        kg: {
            type: Number,
            required: true
        },
        piezas: {
            type: Number,
            required: true
        },
        material: {
            type: String,
            required: true
        },
        calibre: {
            type: Number,
            required: true
        },
        linea: {
            type: String,
            required: true
        },
        color: {
            type: String,
            required: true
        },
        fechaSecado: {
            type: String,
            required: true
        },
        korona: Boolean,
        engraseSeco: Boolean,
        escurrir: Boolean,
        desvenado: Boolean,
        bauce: Boolean,
        vacio: Boolean,
        taic: Boolean,
        aereo: Boolean,
        toggling: Boolean,
        pulido: Boolean,
        abatanado: Boolean,
        ablandado: Boolean,
        vacio2: Boolean,
        pistolas: Boolean,
        roller: Boolean,
        finilux: Boolean,
        rotoprex: Boolean,
        partido: Boolean,
        grabado: Boolean,
        envioPlanta: Boolean,
        fechaFactura: String,
        numeroFactura: String,

    }
)

export const Engrase = mongoose.model('engrases', engraseSchema);