import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
require("dotenv").config();
// import { PORT, mongodbURL } from '../utopia_new_server/config.js';
import formulasRoute from './routes/formulaRoute.js';
import bitacoraRoute from './routes/bitacoraRoute.js';
import engraseRoute from './routes/engraseRoute.js';
import quimicoInventarioRoute from './routes/quimicoInventarioRoute.js';
import formulasTotalesRoute from './routes/formulasTotalesRoute.js';
import quimicoBitacoraRoute from './routes/quimicoBitacoraRoute.js';
import importacionesRoute from './routes/importacionesRoute.js';
import pielesInventarioRoute from './routes/pielesInventarioRoute.js';
import ventasVentasRoute from './routes/ventasVentasRoute.js';
import ventasConceptosRoute from './routes/ventasConceptosRoute.js';
import maquilasVentasRoute from './routes/maquilasVentasRoute.js';
import maquilasConceptosRoute from './routes/maquilasConceptosRoute.js';

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS policy
//Option 1: Allow all origins with default of cors(*)
// app.use(cors());

//Option 2: Allow Custom Origins
app.use(
    cors({
        origin: ['http://localhost:3000'], // replace this to your frontend url
    })
);

mongoose
    .connect(process.env.mongodbURL)
    .then(() => {
        console.log("App connected to database");
        const PORT = process.env.PORT || 8000
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error: ", error);
    })

//FORMULAS ROUTES
app.use('/', formulasRoute);

// app.use('/formulas/:id', formulasRoute);

app.use('/:nombre', formulasRoute);

//BITACORA/REPORTES ROUTES
app.use('/', bitacoraRoute);

//ENGRASES ROUTES
app.use('/', engraseRoute);

//QUIMICOS ROUTES
app.use('/', quimicoInventarioRoute);

//FORMULAS_TOTALES ROUTES
app.use('/', formulasTotalesRoute);
app.use('/:nombre', formulasTotalesRoute);

//QUIMICOS BITACORA ENTRADA/SALIDA ROUTES
app.use('/', quimicoBitacoraRoute);

//IMPORTACIONES ROUTES
app.use('/', importacionesRoute);

//INVENTARIO PIELES ROUTES
app.use('/', pielesInventarioRoute);

//VENTAS_VENTAS ROUTES
app.use('/', ventasVentasRoute);

//VENTAS_CONCEPTOS ROUTES
app.use('/', ventasConceptosRoute);

//MAQUILAS_VENTAS ROUTES
app.use('/', maquilasVentasRoute);

//MAQUILAS_CONCEPTOS ROUTES
app.use('/', maquilasConceptosRoute)
