//Exercicios de Fixação 

//********************************EXERCICIOS DE INTERPRETAÇÃO:***********************************//


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
