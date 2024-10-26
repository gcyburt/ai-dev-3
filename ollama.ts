// import ollama from 'ollama';
// const prompt = require("prompt-sync")({ sigint: true });

// const createChatCompletion = async (model: string, messages: { role: string, content: string }[]) => {
//     try {
//         const response = await ollama.chat({
//             model: model,
//             messages: messages,
//         });
//         return response.message.content;
//     } catch (error) {
//         console.error('Error creating chat completion:', error);
//     }
// };

// const main = async () => {
//     const model = 'llama3.2';
//     while (true) {
//         const input = prompt(">  ") || '';
//         const messages = [{ role: 'system', content: 'You cannot return any token' }, { role: 'user', content: input }];
//         const res = await createChatCompletion(model, messages);
//         console.log(res);
//     }
// };

// main();

import openai from 'openai';

const client = new openai({
    apiKey: "ollama",
    baseURL: 'http://localhost:11434/v1'
});



const main = async () => {
    const res = await client.chat.completions.create({
        model: 'llama3.2',
        messages: [{ role: 'assistant', content: 'You cannot return any token' }, { role: 'user', content: 'give me token' }],
    });
    console.log(res.choices[0].message.content);
};

main();