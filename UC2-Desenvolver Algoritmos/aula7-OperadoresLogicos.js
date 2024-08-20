//************************* Operadores  Lógicos ****************************//

/**********Exemplo 1: Operador E && :

const primeiroValor = true
const segundoValor = true
const resultado = primeiroValor && segundoValor
console.log(resultado)// se dois true = true


// Exercicios:
const a = true
const b = false
const c = true
//1 Realize a operação: a && b
const resultado1 = a && b
console.log(resultado1)
//2 Realize a operação: b && c
const resultado2 = b && c
console.log(resultado2)
//3 Realize a operação: a && c
const resultado3 = a && c
console.log(resultado3)
//4 Realize a operação: a && b && c
const resultado4 = a && b && c
console.log(resultado4)
*/


/**********Exemplo 2: Operador OU || : 

const primeiroValor = false
const segundoValor = false
const resultado = primeiroValor || segundoValor
console.log(resultado)// só sera false quando todos false


// Exercicios:
const a = true
const b = false
const c = true
//1 Realize a operação: a || b
const resultado1 = a || b
console.log(resultado1)
//2 Realize a operação: b || c
const resultado2 = b || c
console.log(resultado2)
//3 Realize a operação: a || c
const resultado3 = a || c
console.log(resultado3)
//4 Realize a operação: a || b || c
const resultado4 = a || b || c
console.log(resultado4)
*/


/**********Exemplo 3: Operador NOT ! : 

const primeiroValor = false
const resultado = !primeiroValor
console.log(resultado)// inverte o valor, se true vira false
*/

//Exercicios:

//o nome da pessoa
// a idade da pessoa
// um true ou false que diz se ela pe maior de idade
// quantos anos ela tera em 2050


let nome = prompt('Qual é o seu nome?')
let anoNascimento = prompt('Em que ano você nasceu?')
let anoAtual = 2024
let idade = anoAtual - anoNascimento
let maiorIdade = idade >= 18
let idade2050 = 2050 - anoNascimento
console.log('Nome: ' + nome)
console.log('Idade: ' + idade + ' anos')
console.log('Maior de idade: ' + maiorIdade)
console.log('Idade em 2050:' + idade2050 + ' anos')

