import express from 'express';
import { FormulasTotales } from '../models/formulasTotalesModel.js';
import { QuimicoInventario } from '../models/quimicoInventarioModel.js';

const router = express.Router();

//GET all formulasTotales
router.get('/formulas_totales', async (req, res) => {
    try {
        const totales = await FormulasTotales.find({});
        return res.status(200).json({
            count: totales.length,
            data: totales
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

router.get('/formulas_totales/:nombre', async (req, res) => {
    try {

        const { nombre } = req.params;

        const totales = await FormulasTotales.find({ formula: nombre });

        return res.status(200).json({
            count: totales.length,
            data: totales
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

router.put('/formulas_totales/', async (req, res) => {
    try {
        const bulkOps = req.body.map(obj => {
            return {
                updateOne: {
                    filter: {
                        nombre: obj.nombre
                    },
                    update: {
                        cantidad: obj.cantidad
                    }
                }
            }
        })

        QuimicoInventario.bulkWrite(bulkOps);

        return res.status(200).send({ message: 'Inventario updated successfully' })

    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

export default router;

// quimicoA
// quimicoB
// quimicoD
// quimicoE
// quimicoF
// quimicoG
// quimicoH
// quimicoI
// quimicoJ
// quimicoK
// quimicoL
// quimicoM
// quimicoN
// quimicoO
// quimicoP
// quimicoQ
// quimicoR
// quimicoS
// quimicoT
// quimicoU
// quimicoV
// quimicoW
// quimicoX
// quimicoY
// quimicoZ