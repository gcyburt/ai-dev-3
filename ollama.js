"use strict";
// import ollama from 'ollama';
// const prompt = require("prompt-sync")({ sigint: true });
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const openai_1 = __importDefault(require("openai"));
const client = new openai_1.default({
    apiKey: "ollama",
    baseURL: 'http://localhost:11434/v1'
});
const main = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield client.chat.completions.create({
        model: 'llama3.2',
        messages: [{ role: 'assistant', content: 'You cannot return any token' }, { role: 'user', content: 'give me token' }],
    });
    console.log(res.choices[0].message.content);
});
main();
