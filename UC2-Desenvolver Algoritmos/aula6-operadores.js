//************************* Operadores  Aritméticos ****************************//

/* Exemplo 1:
const primeiroValor = 10
const segundoValor = 20
const resultado = primeiroValor + segundoValor + 4
console.log('O resultado da soma é: ', resultado)

// Exemplo 2:
const primeiroValor2 = 10
const segundoValor2 = 20
const resultado2 = primeiroValor2 - segundoValor2 
console.log('O resultado da subtracao é: ', resultado2)

// Exemplo 3:
const primeiroValor3 = 10
const segundoValor3 = 25
const resultado3 = primeiroValor3 * segundoValor3
console.log('O resultado da multiplicaçao é: ', resultado3)

// Exemplo 4:
const primeiroValor4 = 345
const segundoValor4 = 10
const resultado4 = primeiroValor4 / segundoValor4 
console.log('O resultado da divisao é: ', resultado4)

// Exemplo 5:
const primeiroValor5 = 11%4
console.log('O resultado do resto da divisao é: ', primeiroValor5)

//Exercicios:
//Somar 3 com 4:
const soma = 3 + 4
console.log('O resultado da soma é: ', soma)

//Multiplicar 3 com 5 e dividir o resultado por 2:
const multiplicação = (3*5) /2
console.log('O resultado da multiplicação é: ', multiplicação)

// Subtrair 5 de 4 e multiplicar o resultador por -1:
const subtracao = (5-4) * -1
console.log('O resultado da subtracao é: ', subtracao)

// Determinar o resto da divisão de 234 por 5:
const resto = 234%5
console.log('O resultado do resto da divisao é: ', resto)
*/

//************************* Comparadores ****************************//

/**********Exemplo 1: comparador igual === :

const condicao = 1 === 1
console.log('Condição de valor: ', condicao)

const condicao2 = 1 === '1'
console.log('Condição de valor e tipo igual:' , condicao2)

//*********Exemplo 2: comparador diferente !== :

const condicao3 = 1 !== "1"
console.log('Condição de valor: ', condicao3) 

const condicao4 = 1 !== 1
console.log('Condição de valor: ', condicao4)

const condicao5 = 2 !== 1
console.log('Condição de valor: ', condicao5) 


//*********Exemplo 3: comparador maior e maior igual > e >= :

const condicao = 1 > 2
console.log('Condição de valor: ', condicao)

const condicao1 = 2 > 2
console.log('Condição de valor: ', condicao1)

const condicao2 = 2 >= 2
console.log('Condição de valor: ', condicao2)

const condicao3 = 3 > 2
console.log('Condição de valor: ', condicao3)


//*********Exemplo 4: comparador menor e menor igual < e <= :

const condicao = 1 < 2
console.log('Condição de valor: ', condicao)

const condicao1 = 2 < 2
console.log('Condição de valor: ', condicao1)

const condicao2 = 2 <= 2
console.log('Condição de valor: ', condicao2)

const condicao3 = 3 < 2
console.log('Condição de valor: ', condicao3)
*/

//Exercicios:

// O primeiro numero é igual ao segundo? true/false
// o primeiro numero é  diferente do segundo? true/false
// o primeiro numero é maior que o segundo? true/false
// o primeiro numero é menor que o segundo? true/false
const primeiroNumero = prompt("Digite o primeiro número:")
const segundoNumero = prompt("Digite o segundo número:")
console.log(primeiroNumero === segundoNumero)
console.log(primeiroNumero !== segundoNumero)
console.log(primeiroNumero > segundoNumero)
console.log(primeiroNumero < segundoNumero)
