import Matematica from "./Matematica"
import valid from 'validator'
/*
import {}
*/
let nome: string = "Helder Monteiro"
let idade: number = 52

console.log(`Meu nome é ${nome} e tenho ${idade} anos.`)

let n1: number =10
let n2: number = 2

console.log(`Soma: ${Matematica.somar(n1, n2)}`)
console.log(`Subtração: ${Matematica.subtrair(n1, n2)} `)
console.log(`Multiplicação: ${Matematica.multiplicar(n1, n2)}`)
console.log(`versão ${Matematica.versao}`)

console.log(`é email valido ${valid.isEmail('helder@hot.com')}`)
console.log(`é IP valido ${valid.isIP('xxx.sss.xxx.fff')}`)