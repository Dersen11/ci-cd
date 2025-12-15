const express = require('express');
const mongoose = require('mongoose');
const app = express();

app.use(express.json());

// Ruta simple de prueba
app.get('/', (req, res) => {
    res.status(200).json({ message: "¡Hola! La app está funcionando" });
});

// Ruta que simula uso de base de datos
app.get('/api/status', (req, res) => {
    const dbStatus = mongoose.connection.readyState === 1 ? "Conectado" : "Desconectado";
    res.status(200).json({ db: dbStatus });
});

module.exports = app;