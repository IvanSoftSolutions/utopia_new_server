import express from 'express';
import { Importacion } from '../models/importacionesModel.js';

const router = express.Router();

//GET all engrases
router.get('/importaciones', async (req, res) => {
    try {
        const importaciones = await Importacion.find({});
        return res.status(200).json({
            count: importaciones.length,
            data: importaciones
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//POST new engrase
router.post('/importaciones', async (req, res) => {
    try {
        if (
            // !req.body.usuario ||
            !req.body.factura ||
            !req.body.contrato ||
            !req.body.no ||
            !req.body.camion ||
            !req.body.kind ||
            !req.body.pallets ||
            !req.body.valorUSD ||
            !req.body.hides ||
            !req.body.peso ||
            !req.body.eta ||
            !req.body.insurance ||
            !req.body.maquila ||
            !req.body.partida ||
            !req.body.entrada
        ) {
            return res.status(400).send({
                message: 'Send all required fields: fechaEngrase, numeroCarga, cuero, camionPartida, kg, piezas, material, calibre, linea, color, fechaSecado'
            });
        }
        const newImportacion = {
            factura: req.body.factura,
            contrato: req.body.contrato,
            no: req.body.no,
            camion: req.body.camion,
            kind: req.body.kind,
            pallets: req.body.pallets,
            valorUSD: req.body.valorUSD,
            hides: req.body.hides,
            peso: req.body.peso,
            eta: req.body.eta,
            truck: req.body.truck,
            insurance: req.body.insurance,
            maquila: req.body.maquila,
            partida: req.body.partida,
            entrada: req.body.entrada,
            split: req.body.split,
            final: req.body.final,
            remojo: req.body.remojo,
            dividido: req.body.dividido,
            entrega: req.body.entrega,
            tipo: req.body.tipo,
            observaciones: req.body.observaciones,
            costoProceso: req.body.costoProceso,
            facturaPagada: req.body.facturaPagada,
            numeroFactura: req.body.numeroFactura,
        };
        const importacion = await Importacion.create(newImportacion);
        return res.status(201).send(importacion);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

export default router;