import express from 'express';
import { MaquilasConceptos } from '../models/maquilasConceptosModel.js';

const router = express.Router();

//GET all concepto
router.get('/maquilas_conceptos', async (req, res) => {
    try {
        const conceptos = await MaquilasConceptos.find({});
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
router.post('/maquilas_conceptos', async (req, res) => {
    try {
        if (
            // !req.body.usuario ||
            !req.body.concepto ||
            !req.body.unidad ||
            !req.body.tipo ||
            !req.body.precio
        ) {
            return res.status(400).send({
                message: 'Send all required fields: concepto, unidad, seleccion, tipo'
            });
        }
        const newConcepto = {
            concepto: req.body.concepto,
            unidad: req.body.unidad,
            tipo: req.body.tipo,
            precio: req.body.precio,
        };
        const maquila = await MaquilasConceptos.create(newConcepto);
        return res.status(201).send(maquila);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

export default router;