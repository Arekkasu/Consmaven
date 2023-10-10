#!/usr/bin/env node
const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');


app.use(express.urlencoded({ extended: false }));


app.use(express.json());

app.use(express.static(path.join(__dirname, 'src/public')));

app.use(require('./src/routes/routes'));

app.listen(5000, () => console.log('Servidor corriendo en el puerto 7000'));