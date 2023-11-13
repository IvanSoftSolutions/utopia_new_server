import express from 'express';
import { VentasConceptos } from '../models/ventasConceptosModel.js';

const router = express.Router();

//GET all concepto
router.get('/ventas_conceptos', async (req, res) => {
    try {
        const conceptos = await VentasConceptos.find({});
        return res.status(200).json({
            count: conceptos.length,
            data: conceptos
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//POST new concepto
router.post('/ventas_conceptos', async (req, res) => {
    try {
        if (
            // !req.body.usuario ||
            !req.body.concepto ||
            !req.body.unidad ||
            !req.body.seleccion ||
            !req.body.tipo
        ) {
            return res.status(400).send({
                message: 'Send all required fields: concepto, unidad, seleccion, tipo'
            });
        }
        const newConcepto = {
            concepto: req.body.concepto,
            unidad: req.body.unidad,
            seleccion: req.body.seleccion,
            tipo: req.body.tipo,
        };
        const venta = await VentasConceptos.create(newConcepto);
        return res.status(201).send(venta);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

export default router;