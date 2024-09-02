//************************* Operadores  Aritméticos ****************************//


/* //Exemplo 1: WHILE
let i = 0                           // COMEÇO
while(i < 10) {                    // 
    console.log('Onumero é:', i)  //
    i++                          // i+1 incremento
}


//Exemplo 2:

let estomago = 0
while(estomago < 100){
    console.log('Quero comer mais coxinhas')
    estomago = estomago + 10
}*/


/*Exercicio:
//soma de numeros, o usuario deve enserir varios numeros como 10,3,50,7, 0 quando ele digitar zero
 deve parar de solicitar novos imputs e imprimir a soma dos numeros colocados pelo usuario

let soma = 0
while (true) {
    let numero = Number(prompt('Digite um número (digite 0 para parar):'))
    if (numero === 0) {
        break //quando o usuario digitar 0, o loop para somando os numeros digitados anteriormente
    }
    soma += numero
}
console.log('A soma dos números é:', soma)


 //Exemplo 2: DO WHILE

let c = 1
do{
    console.log('o valor do contador é:' , c)
    c++
}while(c <= 6)



 //Exemplo 3: FOR

 const numeros = [14,67,89,15,23]
for(let i = 0; i<5;i++){
    const elemento = numeros[i] // comecar na posicao 0 do array
    console.log(elemento)
}

/*Exercicio:
escreva um programa de um array com numeros e devolva qual o maior dentro dele
para o array [11,15,18,14,12,13], a saida deve ser: 'o maior numero é 18' 

let numeros = [11, 15, 18, 14, 12, 13]

let maiorNumero = numeros[0] //variavel para armazenar o maior número com o primeiro valor do array
for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maiorNumero) {
        maiorNumero = numeros[i] //loop para encontrar o maior numero
    }
}
console.log('O maior número é ' + maiorNumero)


const numeros = [11, 15, 18, 14, 21, 13]
let numeroMaior = numeros[0]
for(let i = 0; i<6;i++){
 if(numeroMaior<numeros[i])
    numeroMaior=numeros[i]

}
console.log('O maior numero é:', numeroMaior)


//Exercicio: fazer soma de numeros pares

let numeros = [11, 15, 18, 14, 12, 13]
let somaPares = 0

for (let i = 0; i < numeros.length; i++) {
    if (numeros[i] % 2 === 0) { // Verifica se o número é par
        somaPares += numeros[i] // Adiciona o número par à soma
    }
}
console.log('A soma dos números pares é:', somaPares)




//Exemplo 4: FOR OF

const numeros = [14,67,89,15,23]
for(let dados of numeros){
    console.log(dados)
}


const palavras = ['Oi ' + 'sumido, ' + 'tudo ' + 'bem ?' + ' Saudades!']
for(let frase of palavras){
    console.log(frase)
}*/


const numeros = [11,15,18,14,12,13]
let somar = 0
for (let numero of numeros) {
    if (numero  %2 === 0) 
        somar += numero
        
    }
    console.log(somar)
       