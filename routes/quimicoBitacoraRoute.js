import express from 'express';
import { QuimicoBitacora } from '../models/quimicoBitacoraModel.js';

const router = express.Router();

//GET all logs
router.get('/quimico_bitacora', async (req, res) => {
    try {
        const logs = await QuimicoBitacora.find({});
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
router.post('/quimico_bitacora_out', async (req, res) => {
    try {

        const bulkOps = req.body.map(obj => {
            return {
                insertOne: {
                    document: {

                        nombre: obj.nombre,
                        cantidad: obj.cantidad,
                        fecha: obj.fecha,
                        entradaSalida: obj.entradaSalida,
                    }
                }
            }
        })

        const bitacora = await QuimicoBitacora.bulkWrite(bulkOps);

        return res.status(201).send(bitacora);

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

router.post('/quimico_bitacora_in', async (req, res) => {
    try {
        if (
            // !req.body.usuario ||
            !req.body.nombre ||
            !req.body.cantidad ||
            !req.body.fecha ||
            !req.body.entradaSalida
        ) {
            return res.status(400).send({
                message: 'Send all required fields: nombre, productor, , cantidad, peso, precio, divisa'
            });
        }
        const newQuimico = {
            nombre: req.body.nombre,
            cantidad: req.body.cantidad,
            fecha: req.body.fecha,
            entradaSalida: req.body.entradaSalida,
        };
        const quimico = await QuimicoBitacora.create(newQuimico);
        return res.status(201).send(quimico);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

export default router;