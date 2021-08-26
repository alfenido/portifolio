"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const Matematica_1 = __importDefault(require("./Matematica"));
const validator_1 = __importDefault(require("validator"));
/*
import {}
*/
let nome = "Helder Monteiro";
let idade = 52;
console.log(`Meu nome é ${nome} e tenho ${idade} anos.`);
let n1 = 10;
let n2 = 2;
console.log(`Soma: ${Matematica_1.default.somar(n1, n2)}`);
console.log(`Subtração: ${Matematica_1.default.subtrair(n1, n2)} `);
console.log(`Multiplicação: ${Matematica_1.default.multiplicar(n1, n2)}`);
console.log(`versão ${Matematica_1.default.versao}`);
console.log(`é email valido ${validator_1.default.isEmail('helder@hot.com')}`);
console.log(`é IP valido ${validator_1.default.isIP('xxx.sss.xxx.fff')}`);
