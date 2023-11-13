import express from 'express';
import { MaquilasVentas } from '../models/maquilasVentasModel.js';

const router = express.Router();

//GET all engrases
router.get('/maquilas_ventas', async (req, res) => {
    try {
        const maquilas = await MaquilasVentas.find({});
        return res.status(200).json({
            count: maquilas.length,
            data: maquilas
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//POST new engrase
router.post('/maquilas_ventas', async (req, res) => {
    try {
        if (
            // !req.body.usuario ||
            !req.body.folio ||
            !req.body.fecha ||
            !req.body.cliente ||
            !req.body.concepto ||
            !req.body.cantidad ||
            !req.body.wholeHidesSides ||
            !req.body.precio ||
            !req.body.totalPesos ||
            !req.body.tasaCambio ||
            !req.body.totalUsd
        ) {
            return res.status(400).send({
                message: 'Send all required fields: fechaEngrase, numeroCarga, cuero, camionPartida, kg, piezas, material, calibre, linea, color, fechaSecado'
            });
        }
        const newMaquila = {
            folio: req.body.folio,
            fecha: req.body.fecha,
            cliente: req.body.cliente,
            concepto: req.body.concepto,
            wholeHidesSides: req.body.wholeHidesSides,
            cantidad: req.body.cantidad,
            precio: req.body.precio,
            totalPesos: req.body.totalPesos,
            tasaCambio: req.body.tasaCambio,
            totalUsd: req.body.totalUsd,
            observaciones: req.body.observaciones,
        };
        const maquila = await MaquilasVentas.create(newMaquila);
        return res.status(201).send(maquila);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

export default router;