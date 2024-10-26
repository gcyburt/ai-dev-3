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