//Exercicios de Fixação 

//********************************EXERCICIOS DE INTERPRETAÇÃO:***********************************//

/* Exercício 1:
// O código inicia uma variável valor com 0, loop for itera 5 vezes, de i = 0 até i = 4
cada iteração, o valor de i é adicionado à variável valor
Após todas as iterações, valor será 0 + 1 + 2 + 3 + 4, o que resulta em 10
Resposta: O código soma os números de 0 a 4 e imprime 10 no console



// Exercício 2:
//O código percorre a lista e imprime os números maiores que 18. Serão impressos: 19, 21, 23, 25, 27, 30
// b) Resposta: O for...of sozinho não acessa o índice



// Exercício 3:

o usuário digita 4 para quantidadeTotal
o while cria e imprime linhas de asteriscos até que quantidadeAtual seja igual a quantidadeTotal
cada linha tem um asterisco a mais que a anterior

// **
// ***
// ****
// *****



*/

//********************************EXERCICIOS DE ESCRITA:***************************************** /

 //Exercicio 1:

 let quantidadePets = Number(prompt('Quantos bichinhos de estimação você tem?'))

if (quantidadePets === 0) {  // se o usuario digitar zer, a mensagem adote
  console.log('Que pena! Adote um pet ;)')
} else {
  let nomesPets = []
  for (let i = 0; i < quantidadePets; i++) { //se o usuario colocar acima de 0, peça para ele digitar os nomes de cada pet
    let nomePet = prompt(`Digite o nome do bichinho ${i + 1}:`)
    nomesPets.push(nomePet) // imprime  o array com os nomes dos pets
  }
  console.log(nomesPets)
}




/* Exercicio 2:

const arrayOriginal = [10, 25, 32, 47, 58, 63, 72]

// a) 
for (let i = 0; i < arrayOriginal.length; i++) {    // imprime cada um dos valores do array original
  console.log(arrayOriginal[i])
}

// b) 
for (let i = 0; i < arrayOriginal.length; i++) {   // imprime cada um dos valores do array original dividido por 10
  console.log(arrayOriginal[i] / 10)
}

// c) 
const arrayNumerosPares = []
for (let i = 0; i < arrayOriginal.length; i++) {   // criei um novo array, apenas com numeros pares e imprimir novo array
  if (arrayOriginal[i] % 2 === 0) {
    arrayNumerosPares.push(arrayOriginal[i])
  }
}
console.log(arrayNumerosPares)

// d) 
const arrayString = []                             // novo array com strings, o elemento do index i é numero tal....
for (let i = 0; i < arrayOriginal.length; i++) {
  arrayString.push(`O elemento do índex ${i} é: ${arrayOriginal[i]}`)
}
console.log(arrayString)

// e) 
let maiorNumero = arrayOriginal[0]   
let menorNumero = arrayOriginal[0]  

for (let i = 1; i < arrayOriginal.length; i++) {  // numeros maiores
  if (arrayOriginal[i] > maiorNumero) {
    maiorNumero = arrayOriginal[i]
  }
  if (arrayOriginal[i] < menorNumero) {           // numeros maiores
    menorNumero = arrayOriginal[i]
  }
}
console.log(`Maior número: ${maiorNumero}`)
console.log(`Menor número: ${menorNumero}`)



//********************************  DESAFIOS :***************************************** /


/*
// Desafio 1:

//a) 
const numeroPensado = Number(prompt('Jogador 1, escolha um número:'))
console.log("Vamos jogar!")

// b)
let tentativa
let tentativas = 0

do {
  tentativa = Number(prompt('Jogador 2, chute um número:'))
  tentativas++
  console.log(`O número chutado foi: ${tentativa}`)

  if (tentativa < numeroPensado) {
    console.log('Errou. O número escolhido é maior!')
  } else if (tentativa > numeroPensado) {
    console.log('Errou. O número escolhido é menor!')
  }
} while (tentativa !== numeroPensado)

// c) 
console.log('Acertou!!')
console.log(`O número de tentativas foi: ${tentativas}`)
// a) 
const numeroPensado1 = Math.floor(Math.random() * 100) + 1
console.log('Vamos jogar!')*/
