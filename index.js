'use strict'

const mongoose = require('mongoose');
const app = require('./app');
const port = 3900;

mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/blog', { useNewUrlParser: true })
        .then(() => {
            console.log('Conexión a la base de datos correcta !!!');

            // Crear servidor y ponerme a escuchar peticiones HTTP
            app.listen(port, () => {
                console.log('Servidor corriendo en http://localhost:'+port);
            });

        });