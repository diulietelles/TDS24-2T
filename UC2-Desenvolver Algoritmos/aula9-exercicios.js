//Exercicios de Fixação 

//********************************EXERCICIOS DE INTERPRETAÇÃO:***********************************//

//exercicio 1:
/*
let array
console.log('a. ', array) 
// a. undefined
// O array foi declarado(iniciado), mas não recebeu valor, então  é undefined

array = null
console.log('b. ', array)
// b. null
// O array é  null,  nenhum objeto ou array

array = [3,4,5,6,7,8,9,10,11,12,13]
console.log('c. ', array.length)
// c. 11
// O length retorna o número de elementos no array, que é 11

let i = 0
console.log('d. ', array[i])
// d. 3
// A variável  i inicia  com 0. array[i] acessa o primeiro elemento que é 3

array[i+1] = 19
console.log('e. ', array)
// e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// é alterado de 4 para 19

const valor = array[i +6]
console.log('f. ', valor)
// f. 9
//  acessa o sétimo elemento do array  que é 9


//exercicio 2:

const frase = prompt('Digite uma frase:')
console.log(frase.toLocaleUpperCase().replaceAll('A','I'), frase.length)
//Qual será o valor impresso no console se a entrada do usuario for: 'Subi num onibus em Marrocos'?

//SUBI NUM ONIBUS EM MIRROCOS//27



//********************************EXERCICIOS DE ESCRITA:*********************************** //

//exercicio 1:

const  nomeDoUsuario = prompt('Digite seu nome:')
const email = prompt('Digite seu email:')
console.log(`O email ${email} foi cadastrado como sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`)

//exercicio 2:

// a) 
let comidasFavoritas = ['Sushi', 'Pizza', 'Onigiri', 'Mexicana', 'Churrasco']
console.log(comidasFavoritas)

// b) 
console.log('Essas são as minhas comidas favoritas:')
console.log(comidasFavoritas[0])
console.log(comidasFavoritas[1])
console.log(comidasFavoritas[2])
console.log(comidasFavoritas[3])
console.log(comidasFavoritas[4])


// c)
let novaComida = prompt("Qual é a sua comida favorita?")
comidasFavoritas[1] = novaComida */


//exercicio 3:


// a)
let listaDeTarefas = []

// b) 
listaDeTarefas.push(prompt('Digite a primeira tarefa do seu dia a dia:'))
listaDeTarefas.push(prompt("Digite a segunda tarefa do seu dia a dia:"))
listaDeTarefas.push(prompt('Digite a terceira tarefa do seu dia a dia:'))

// c) 
console.log('Suas tarefas:', listaDeTarefas)

// d) 
let indice = Number(prompt('Digite o índice da tarefa que você já realizou: 0, 1 ou 2'))

// e)
listaDeTarefas.splice(indice, 1)

// f) 
console.log('Suas tarefas restantes:', listaDeTarefas)

