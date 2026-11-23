require('dotenv').config();
const express = require('express');

const app = express();

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'Cloud Lab 5';
const NODE_ENV = process.env.NODE_ENV || 'development';

app.get('/', (req, res) => {
    res.send(`
        <h1>${APP_NAME}</h1>
        <h2>Лабораторна робота №5</h2>
        <p>Хмарні сервіси та деплоймент</p>
        <p>Сервер успішно працює!</p>
        <p>Середовище: ${NODE_ENV}</p>
    `);
});

app.get('/health', (req, res) => {
    res.json({
        status: 'OK',
        message: 'Сервер працює успішно!',
        environment: NODE_ENV
    });
});

app.listen(PORT, '0.0.0.0', () => {
    console.log(`${APP_NAME} запущено на порту ${PORT}`);
});

