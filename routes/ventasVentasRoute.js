import express from 'express';
import { VentasVentas } from '../models/ventasVentasModel.js';

const router = express.Router();

//GET all engrases
router.get('/ventas_ventas', async (req, res) => {
    try {
        const ventas = await VentasVentas.find({});
        return res.status(200).json({
            count: ventas.length,
            data: ventas
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//POST new engrase
router.post('/ventas_ventas', async (req, res) => {
    try {
        if (
            // !req.body.usuario ||
            !req.body.folio ||
            !req.body.fecha ||
            !req.body.cliente ||
            !req.body.concepto ||
            !req.body.piezas ||
            !req.body.wholeHidesSides ||
            !req.body.precio ||
            !req.body.totalPesos ||
            !req.body.tasaCambio ||
            !req.body.totalUsd ||
            !req.body.observaciones
        ) {
            return res.status(400).send({
                message: 'Send all required fields: fechaEngrase, numeroCarga, cuero, camionPartida, kg, piezas, material, calibre, linea, color, fechaSecado'
            });
        }
        const newVenta = {
            folio: req.body.folio,
            fecha: req.body.fecha,
            cliente: req.body.cliente,
            concepto: req.body.concepto,
            piezas: req.body.piezas,
            wholeHidesSides: req.body.wholeHidesSides,
            cantidad: req.body.cantidad,
            unidad: req.body.unidad,
            precio: req.body.precio,
            totalPesos: req.body.totalPesos,
            tasaCambio: req.body.tasaCambio,
            totalUsd: req.body.totalUsd,
            observaciones: req.body.observaciones,
        };
        const venta = await VentasVentas.create(newVenta);
        return res.status(201).send(venta);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

export default router;