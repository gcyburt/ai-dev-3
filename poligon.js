"use strict";
require('dotenv').config();
const axios = require('axios');
let data = [];
axios.get('https://poligon.aidevs.pl/dane.txt')
    .then((response) => {
    data = response.data.split('\n').filter((line) => line !== '');
    const apiKey = process.env.API_KEY || '';
    const payload = { task: 'POLIGON', apikey: apiKey, answer: data };
    console.log(payload);
    return axios.post('https://poligon.aidevs.pl/verify', payload);
})
    .then((response) => {
    console.log(response.data);
})
    .catch((error) => {
    console.error(error);
});
