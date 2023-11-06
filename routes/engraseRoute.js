import express from 'express';
import { Engrase } from '../models/engraseModel.js'

const router = express.Router();

//GET all engrases
router.get('/engrase', async (req, res) => {
    try {
        const engrases = await Engrase.find({});
        return res.status(200).json({
            count: engrases.length,
            data: engrases
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

//POST new engrase
router.post('/engrase', async (req, res) => {
    try {
        if (
            // !req.body.usuario ||
            !req.body.fechaEngrase ||
            !req.body.numeroCarga ||
            !req.body.cuero ||
            !req.body.camionPartida ||
            !req.body.kg ||
            !req.body.piezas ||
            !req.body.material ||
            !req.body.calibre ||
            !req.body.linea ||
            !req.body.color ||
            !req.body.fechaSecado
        ) {
            return res.status(400).send({
                message: 'Send all required fields: fechaEngrase, numeroCarga, cuero, camionPartida, kg, piezas, material, calibre, linea, color, fechaSecado'
            });
        }
        const newEngrase = {
            fechaEngrase: req.body.fechaEngrase,
            numeroCarga: req.body.numeroCarga,
            cuero: req.body.cuero,
            camionPartida: req.body.camionPartida,
            kg: req.body.kg,
            piezas: req.body.piezas,
            material: req.body.material,
            calibre: req.body.calibre,
            linea: req.body.linea,
            color: req.body.color,
            fechaSecado: req.body.fechaSecado,
            korona: req.body.korona,
            engraseSeco: req.body.engraseSeco,
            escurrir: req.body.escurrir,
            desvenado: req.body.desvenado,
            bauce: req.body.bauce,
            vacio: req.body.vacio,
            taic: req.body.taic,
            aereo: req.body.aereo,
            toggling: req.body.toggling,
            pulido: req.body.pulido,
            abatanado: req.body.abatanado,
            ablandado: req.body.ablandado,
            vacio2: req.body.vacio2,
            pistolas: req.body.pistolas,
            roller: req.body.roller,
            finilux: req.body.finilux,
            rotoprex: req.body.rotoprex,
            partido: req.body.partido,
            grabado: req.body.grabado,
            envioPlanta: req.body.envioPlanta,
            fechaFactura: req.body.fechaFactura,
            numeroFactura: req.body.numeroFactura,
        };
        const engrase = await Engrase.create(newEngrase);
        return res.status(201).send(engrase);
    } catch (error) {
        console.log(error);
        res.status(500).send({ message: error.message })
    }
});

export default router;