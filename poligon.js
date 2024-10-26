"use strict";
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
require('dotenv').config();
const axios_1 = __importDefault(require("axios"));
const fetchData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield axios_1.default.get('https://poligon.aidevs.pl/dane.txt');
        const data = response.data.split('\n').filter((line) => line !== '');
        const apiKey = process.env.API_KEY || '';
        const payload = { task: 'POLIGON', apikey: apiKey, answer: data };
        console.log(payload);
        const verifyResponse = yield axios_1.default.post('https://poligon.aidevs.pl/verify', payload);
        console.log(verifyResponse.data);
    }
    catch (error) {
        console.error(error);
    }
});
fetchData();
