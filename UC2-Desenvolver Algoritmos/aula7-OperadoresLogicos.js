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



/**********Exemplo 3: Operador NOT ! : 

const primeiroValor = false
const resultado = !primeiroValor
console.log(resultado)// inverte o valor, se true vira false


//Exercicios:

//o nome da pessoa
// a idade da pessoa
// um true ou false que diz se ela pe maior de idade
// quantos anos ela tera em 2050


let nome = prompt('Qual é o seu nome?')
let anoNascimento = prompt('Em que ano você nasceu?')
let anoAtual = prompt('Qual o ano atual?')
let idade = anoAtual - anoNascimento
let maiorIdade = idade >= 18
let idade2050 = 2050 - anoNascimento
console.log('Nome: ' + nome)
console.log('Idade: ' + idade + ' anos')
console.log('Maior de idade: ' + maiorIdade)
console.log('Idade em 2050: ' + idade2050 + ' anos')
*/


//********************************EXERCICIOS DE INTERPRETAÇÃO:***********************************//
/*
const bool1 = true 
const bool2 = false 
const bool3 = !bool2 

let resultado = bool1 && bool2 // resultado recebe  AND entre bool1 e bool2, que é false
console.log("a. ", resultado) // Imprime "a. false" 

resultado = bool1 && bool2 && bool3 // A variável resultado atualiza com AND entre bool1, bool2 e bool3, que ainda é false
console.log("b. ", resultado) // Imprime "b. false" 

resultado = resultado && (bool1 || bool2) // A variável resultado é atualizada com a operação lógica AND entre resultado que é false e a operação OR entre bool1 e bool2, resultando em false
console.log("c. ", resultado)// Imprime "c. false"

console.log("d. ", typeof resultado) // Imprime "d. boolean", pois o tipo é boolean



//exercicio 2:

let primeiroNumero = Number(prompt('Digite um numero:')) // converte para número
let segundoNumero = Number(prompt('Digite outro numero:')) // converte para número
const soma = primeiroNumero + segundoNumero //  soma dos convertidos
console.log(soma) 
*/

//********************************EXERCICIOS DE ESCRITA:***********************************//
//exercicio 1:
let idadeUsuario = Number(prompt("Qual é a sua idade?"))
let idadeAmigo = Number(prompt("Qual é a idade do seu melhor amigo ou da sua melhor amiga?"))
let idadeMaior = idadeUsuario > idadeAmigo
console.log("Sua idade é maior do que a do seu melhor amigo?", idadeMaior)
let diferencaIdade = idadeUsuario - idadeAmigo;
console.log("Diferença de idade:", diferencaIdade)


//exercicio 2:
let numeroPar = Number(prompt("Insira um número par:"))
let resto = numeroPar%2
console.log("O resto da divisão do número por 2 é:", resto)
// Sempre que inserimos um número par, o resto da divisão por 2 é 0.
// Comentário: Se o usuário inserir um número ímpar, o resto da divisão por 2 será 1.