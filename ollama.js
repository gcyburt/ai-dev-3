"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const openai_1 = __importDefault(require("openai"));
const openai = new openai_1.default({
    baseURL: 'http://localhost:11434/api/chat/',
    apiKey: '1234567890',
});
openai.chat.completions.create({
    model: 'llama3.2',
    messages: [{ role: 'user', content: 'Hello, how are you?' }],
}).then((response) => {
    console.log(response);
}).catch((error) => {
    console.error(error);
});
