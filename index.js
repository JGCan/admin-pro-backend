require('dotenv').config();

const express = require('express');
const cors = require('cors')

const { dbConnection } = require('./database/config');

// user: mean_user
// password: xvtQx2GxwX0YAltF

//Crear el servidor de express
const app = express();

// Configurar CORS
app.use( cors() );

// Base de Datos
dbConnection();

// Rutas
app.get( '/', ( req, res ) => {
    res.json({
        ok: true,
        msg: 'hola mundo'
    })
});

app.listen( process.env.PORT, () => {
    console.log('servidor corriendo en puerto: '+ process.env.PORT);
});