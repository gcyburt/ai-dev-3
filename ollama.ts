import axios from 'axios';
import OpenAI from 'openai';

const openai = new OpenAI({
    baseURL: 'http://localhost:11434/api/chat',
    apiKey: '1234567890',
});

openai.chat.completions.create({
    model: 'llama3.2',
    messages: [{ role: 'user', content: 'Hello, how are you?' }],
}).then((response: any) => {
    console.log(response);
}).catch((error: any) => {
    console.error(error);
});