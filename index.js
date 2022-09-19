import dotenv from 'dotenv';
dotenv.config();

import express from 'express'; // const express = require('express');
import morgan from 'morgan'; 
import cors from 'cors';
import './src/database';
import router from './src/routes/tareas.routes';

const app = express();

console.log(process.env.REACT_APP_PORT);
app.set('port', process.env.REACT_APP_PORT || 4001);

app.listen(app.get('port'), ()=>{
    console.log("entramos en el puerto "+app.get('port'));
})

//middlewares
app.use(morgan('dev'));
app.use(cors()); 

//...middlewares disponibles en express
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//...cargar un archivo estatico
app.use(express.static("./public"));

//rutas
app.use('/api', router);
console.log('fin');