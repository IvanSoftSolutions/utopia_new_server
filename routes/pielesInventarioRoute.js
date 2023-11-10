import express from 'express';
import { PielesInventario } from '../models/pielesInventarioModel.js';

const router = express.Router();

//GET all engrases
router.get('/pieles_inventario', async (req, res) => {
    try {
        const inventario = await PielesInventario.find({});
        return res.status(200).json({
            count: inventario.length,
            data: inventario
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//POST new engrase
router.post('/pieles_inventario', async (req, res) => {
    try {
        if (
            !req.body.articulo ||
            !req.body.color ||
            !req.body.tipo ||
            !req.body.kind ||
            !req.body.wholesHide ||
            !req.body.sides ||
            !req.body.shrunkenShoulder ||
            !req.body.doubleButt ||
            !req.body.total ||
            !req.body.grado ||
            !req.body.ubicacion ||
            !req.body.pallet ||
            !req.body.locacion ||
            !req.body.costoHide ||
            !req.body.piezasCosto
        ) {
            return res.status(400).send({
                message: 'Send all required fields: fechaEngrase, numeroCarga, cuero, camionPartida, kg, piezas, material, calibre, linea, color, fechaSecado'
            });
        }
        const newPallet = {
            articulo: req.body.articulo,
            color: req.body.color,
            tipo: req.body.tipo,
            kind: req.body.kind,
            wholesHide: req.body.wholesHide,
            sides: req.body.sides,
            shrunkenShoulder: req.body.shrunkenShoulder,
            doubleButt: req.body.doubleButt,
            total: req.body.total,
            grado: req.body.grado,
            ubicacion: req.body.ubicacion,
            pallet: req.body.pallet,
            locacion: req.body.locacion,
            costoHide: req.body.costoHide,
            piezasCosto: req.body.piezasCosto,
            hongo: req.body.hongo,
            shaved: req.body.shaved,
            grosor: req.body.grosor,
            lavado: req.body.lavado,
            rechazados: req.body.rechazados,
            upoTruck: req.body.upoTruck,
            fecha: req.body.fecha,
            evaluador: req.body.evaluador,
            observaciones: req.body.observaciones,
            modificaciones: req.body.modificaciones,
            evaluado: req.body.evaluado,
        };
        const pallet = await PielesInventario.create(newPallet);
        return res.status(201).send(pallet);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

export default router;