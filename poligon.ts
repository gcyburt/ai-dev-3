require('dotenv').config();

const axios = require('axios');

let data: string[] = [];

axios.get('https://poligon.aidevs.pl/dane.txt')
    .then((response: any) => {
        response.data.split('\n').forEach((line: string) => {
            if (line === '') return
            data.push(line)
        })
        const apiKey = process.env.API_KEY ? process.env.API_KEY : ''
        const payload: Answer = { task: 'POLIGON', apikey: apiKey, answer: data }

        console.log(payload)

        axios.post('https://poligon.aidevs.pl/verify', payload).then((response: any) => {
            console.log(response.data)
        }).catch((error: any) => {
            console.error(error)
        })
    })