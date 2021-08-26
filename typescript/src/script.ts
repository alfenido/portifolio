
let numero1 = document.getElementById('numero1') as HTMLInputElement;
let numero2 = document.getElementById('numero2')as HTMLInputElement;
let botao = document.getElementById('calcular')as HTMLButtonElement;
let res = document.getElementById('resultado')as HTMLDivElement;

function calcular(n1: number, n2: number){
    return n1+n2
}

botao.addEventListener('click', function(){
    res.innerHTML = calcular(+numero1.value, +numero2.value).toString();
})
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