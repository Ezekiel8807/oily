import cors from 'cors';
import path from 'path';
import Express, { Router } from 'express';
import dotenv from 'dotenv';
import {fileURLToPath} from 'url';
import bodyParser from 'body-parser';

//controller
// import DataBase from './dataBase.js';
import UserController from './Router/controller.js';
// import AdminController from './Router/AdminController.js';


//setting file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//initiate express
const oily = Express();

//configure environment variable
dotenv.config();

//DataBace instancate
// DataBase();

// ======= middle wares ==========
oily.use(cors());

// parse application/json
oily.use(bodyParser.json());

// parse application/x-www-form-urlencoded
oily.use(bodyParser.urlencoded({ extended: false }));

//static folders
oily.use(Express.static(path.join(__dirname + '/client/build')));


// express entry point
oily.use("/api", UserController);
// getpalmoil.use("/api/admin", AdminController);

//not found routes
oily.use("*", (req, res) => {
    res.sendFile(path.join(__dirname + '/client/build',  'index.html'));
});

//server listening port
oily.listen( process.env.PORT, () => console.log("server runing on port " + process.env.PORT));