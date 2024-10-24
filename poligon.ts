require('dotenv').config();
import axios from 'axios';

interface Answer {
    task: string;
    apikey: string;
    answer: string[];
}

const fetchData = async () => {
    try {
        const response = await axios.get('https://poligon.aidevs.pl/dane.txt');
        const data = response.data.split('\n').filter((line: string) => line !== '');
        const apiKey = process.env.API_KEY || '';

        const payload: Answer = { task: 'POLIGON', apikey: apiKey, answer: data };
        console.log(payload);

        const verifyResponse = await axios.post('https://poligon.aidevs.pl/verify', payload);
        console.log(verifyResponse.data);
    } catch (error) {
        console.error(error);
    }
};

fetchData();
