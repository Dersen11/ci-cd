require('dotenv').config();
const mongoose = require('mongoose');
const app = require('./mi-app-cicd/app');

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/mi_base_test';

// Conexión a Base de Datos
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log("Conectado a MongoDB");
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch(err => console.error("Error conectando a DB:", err));