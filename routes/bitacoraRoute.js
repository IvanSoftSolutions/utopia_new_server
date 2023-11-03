import express from 'express';
import { Bitacora } from '../models/bitacoraModel.js';

const router = express.Router();

//GET all logs
router.get('/bitacora', async (req, res) => {
    try {
        const logs = await Bitacora.find({});
        return res.status(200).json({
            count: logs.length,
            data: logs
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//POST new log
router.post('/bitacora', async (req, res) => {
    try {
        if (
            // !req.body.usuario ||
            !req.body.fecha ||
            !req.body.formula ||
            !req.body.peso ||
            !req.body.grosor ||
            !req.body.material
        ) {
            return res.status(400).send({
                message: 'Send all required fields: usuario, fecha, formula, peso, grosor, material'
            });
        }
        const newLog = {
            // usuario: req.body.usuario,
            fecha: req.body.fecha,
            formula: req.body.formula,
            peso: req.body.peso,
            grosor: req.body.grosor,
            material: req.body.material,
            detalles: req.body.detalles,
        };
        const bitacora = await Bitacora.create(newLog);
        return res.status(201).send(bitacora);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

export default router;