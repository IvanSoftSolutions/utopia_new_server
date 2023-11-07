import express from 'express';
import { QuimicoInventario } from '../models/quimicoInventarioModel.js';

const router = express.Router();

//GET all logs
router.get('/quimico_inventario', async (req, res) => {
    try {
        const quimicos = await QuimicoInventario.find({}).sort({ nombre: 1 });
        return res.status(200).json({
            count: quimicos.length,
            data: quimicos
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//POST new quimico
router.post('/quimico_inventario', async (req, res) => {
    try {
        if (
            // !req.body.usuario ||
            !req.body.nombre ||
            !req.body.productor ||
            !req.body.presentacion ||
            !req.body.cantidad ||
            !req.body.peso ||
            !req.body.precio ||
            !req.body.divisa
        ) {
            return res.status(400).send({
                message: 'Send all required fields: nombre, productor, , cantidad, peso, precio, divisa'
            });
        }
        const newQuimico = {
            nombre: req.body.nombre,
            productor: req.body.productor,
            presentacion: req.body.presentacion,
            cantidad: req.body.cantidad,
            peso: req.body.peso,
            precio: req.body.precio,
            divisa: req.body.divisa,
        };
        const quimico = await QuimicoInventario.create(newQuimico);
        return res.status(201).send(quimico);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//UPDATE cantidad de quimico
router.put('/quimico_inventario', async (req, res) => {
    try {
        if (
            !req.body.nombre ||
            !req.body.cantidad
        ) {
            return res.status(400).send({
                message: 'Send all required fields: nombre, cantidad'
            });
        }

        const filter = { nombre: req.body.nombre };
        const update = { cantidad: req.body.cantidad }

        const result = await QuimicoInventario.findOneAndUpdate(filter, update);

        if (!result) {
            return res.status(404).json({ message: 'Quimico not found' });
        }

        return res.status(200).json({ message: 'Quimico updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

export default router;