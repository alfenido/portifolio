"use strict";
var numero1 = document.getElementById('numero1');
var numero2 = document.getElementById('numero2');
var botao = document.getElementById('calcular');
var res = document.getElementById('resultado');
function calcular(n1, n2) {
    return n1 + n2;
}
botao.addEventListener('click', function () {
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
});
/*
let idade: number = 90;
let nome : string = 'helder'
function firstupercase(nome: string){
    let firstn = nome.charAt(0).toUpperCase();
    return firstn+nome.substring(1)
}

let newnome = firstupercase(nome)

let minVar : string | number = 90;
minVar = 'teste'

type MathFunction = (n1: number, n2: number) => number;
const somar: MathFunction = (num1,num2) =>{
    return num1+num2;
}
let soma= somar(2,4)
*/ 
