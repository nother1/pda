import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import {fileURLToPath} from 'node:url';
import fs  from 'node:fs';
import path from 'node:path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const logStream = fs.createWriteStream(path.join(__dirname, 'logSystem.log'));

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(helmet());
app.use(morgan("dev",{stream:logStream}));

//#region Puerto y rutas
    app.listen(3000, () => {
        console.log("Server running");
    });

    app.get('/', (req, res) => {
        res.status(200).json({message: "Success!"});
        console.log("Server running");
    });

    app.post('/login', (req, res) => {
        res.status(200).json({message: req.body});
        console.log("login completado");
    });

//#endregion
