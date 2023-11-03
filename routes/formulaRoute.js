import express from 'express';
import { Formula } from '../models/formulaModel.js';

const router = express.Router();

//POST formula
router.post('/', async (req, res) => {
    try {
        if (
            !req.body.nombre ||
            !req.body.orden ||
            !req.body.producto
        ) {
            return res.status(400).send({
                mesasge: 'Send all required fields: nombre, orden, producto'
            });
        }
        const newFormula = {
            nombre: req.body.nombre,
            orden: req.body.orden,
            porcentaje: req.body.porcentaje,
            producto: req.body.producto,
            temp: req.body.temp,
            tiempo: req.body.tiempo,
            ph: req.body.ph,
            cut: req.body.cut,
            observaciones: req.body.observaciones,
        };
        const formula = await Formula.create(newFormula);
        return res.status(201).send(formula);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//GET all formulas
router.get('/formulas', async (req, res) => {
    try {
        const formulas = await Formula.find({});
        return res.status(200).json({
            count: formulas.length,
            data: formulas
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//GET by id
// router.get('/:id', async (req, res) => {
//     try {

//         const { id } = req.params;

//         const formula = await Formula.findById(id);

//         return res.status(200).json(formula);
//     } catch (error) {
//         console.log(error);
//         res.status(500).send({ message: error.message })
//     }
// });

router.get('/getformula/:nombre', async (req, res) => {
    try {

        const { nombre } = req.params;

        const formulas = await Formula.find({ nombre: nombre }).sort({ orden: 1 });

        return res.status(200).json({
            count: formulas.length,
            data: formulas
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//UPDATE formula
router.put('/:id', async (req, res) => {
    try {
        if (
            !req.body.nombre ||
            !req.body.orden ||
            !req.body.producto
        ) {
            return res.status(400).send({
                mesasge: 'Send all required fields: nombre, orden, producto'
            });
        }

        const { id } = req.params;

        const result = await Formula.findByIdAndUpdate(id, req.body);

        if (!result) {
            return res.status(404).json({ message: 'Formula not found' });
        }

        return res.status(200).json({ message: 'Formula updated successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//DELETE a formula
router.delete('/:id', async (req, res) => {
    try {

        const { id } = req.params;

        const result = await Formula.findByIdAndDelete(id);

        if (!result) {
            return res.status(404).json({ message: 'Formula not found' });
        }

        return res.status(200).json({ message: 'Formula deleted successfully' });

    } catch (error) {
        console.log(error.message);
        res.status(500).send({ message: error.message })
    }
});

export default router;