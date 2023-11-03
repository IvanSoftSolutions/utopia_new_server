import express from "express";
import cors from 'cors';
import mongoose from 'mongoose';
import { PORT, mongodbURL } from '../utopia_new_server/config.js'
import formulasRoute from './routes/formulaRoute.js'

const app = express();

//Middleware for parsing request body
app.use(express.json());

//Middleware for handling CORS policy
//Option 1: Allow all origins with default of cors(*)
app.use(cors());

//Option 2: Allow Custom Origins
// app.use(
//     cors({
//         origin: ['http://localhost:3000'], // replace this to your frontend url
//         methods: ['GET', 'POST', 'PUT', 'DELETE'],
//         allowedHeaders: ['Content-Type']
//     })
// );

// app.get('/', (req, res) => {
//     console.log(req)
//     return res.status(234).send('asdasdasd');
// });

app.use('/', formulasRoute);

// app.use('/formulas/:id', formulasRoute);

app.use('/:nombre', formulasRoute);

mongoose
    .connect(mongodbURL)
    .then(() => {
        console.log("App connected to database");
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log("MongoDB connection error: ", error);
    })