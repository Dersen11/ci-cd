const request = require('supertest');
const app = require('./app');
const mongoose = require('mongoose');

describe('Pruebas de la API', () => {

    // Antes de todo, podríamos conectar a una DB en memoria, 
    // pero para este ejemplo simple probaremos los endpoints.

    it('Debe responder GET / con status 200', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toEqual(200);
        expect(res.body.message).toBe("¡Hola! La app está funcionando");
    });

    // Al finalizar, cerramos conexiones si las hubiera para que Jest no se cuelgue
    afterAll(async () => {
        await mongoose.connection.close();
    });
});