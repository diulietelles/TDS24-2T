/* ************************* MATRIZES **************************** //

// Exemplo 1:
// a)
let matriz = [
    [1,2,3],
    [4,5,6]
]
console.log(matriz[1][2])
// b)
let matriz1 = [
    [1,2,3],
    [4,5,6]
]
console.log(matriz1[0][2])



// Exemplo 2: declarando uma matriz:

let matriz2 =[
    [10,20,30],
    [40,50,60],
    [70,80,90]
]

// Exemplo 3: inicia vazia []:

let matriz3 = []

matriz3 [0] = [1,2,3]
matriz3 [1] = [4,5,6]
matriz3 [2] = [7,8,9]

// Exemplo 4: exibir valores para acessar um elemento:

let matriz4 =[
    [10,20,30],
    [40,50,60],
    [70,80,90]
]
console.log(matriz4[0][1]) // valor 20
console.log(matriz4[2][1]) // valor 80
console.log(matriz4[1][0]) // valor 40



/*********Exercicio 1: Jogo da Velha:
// criar matriz 3x3, inicializada com 0. acesse o elemento na posicao da segunda linha e terceira coluna e altere o valor para 1 

let matrizJogo = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]
matrizJogo[1][2] = 1
console.log(matrizJogo)



let matriz5 

for(let i=0; i<matriz5.lenght; i++){
    for(ler j=0; j<matriz5[i].lenght;j++){
        console.log(matriz5[i][j])
    }
}


let soma = 0 

for(let i=0; i<matriz5.lenght; i++){

    for(ler j=0; j<matriz5[i].lenght;j++){
    soma += matriz5[i][j]
    }
}
console.log(soma)*/

const { questionNewPassword } = require("readline-sync")

/* Exercicios:
PERCORRENDO UMA MATRIZ:
// crie uma matriz 4x4 e preencha com numeros interiros de 1 a 16
// crie uma funcao que percorre a matriz e calcula a soma de tosos os elementos
// exiba a soma no console 


function criarMatriz() {
    let matriz = []
    let contador = 1
    for (let i = 0; i < 4; i++) {
        matriz[i] = []
        for (let j = 0; j < 4; j++) {
            matriz[i][j] = contador
            contador++
        }
    }
    return matriz
}

function somarMatriz(matriz) {
    let soma = 0
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            soma += matriz[i][j]
        }
    }
    return soma
}

let matriz = criarMatriz()
console.log('Matriz 4x4:')
console.log(matriz)

let soma = somarMatriz(matriz)
console.log(`Soma de todos os elementos: ${soma}`)

  [[ 1, 2, 3, 4 ],
  [ 5, 6, 7, 8 ],
  [ 9, 10, 11, 12 ],
  [ 13, 14, 15, 16 ]
  ]
*/


/* jogo batalha naval:
 afundar todos os navios, cria uma matriz bidimensional onde cda celular sera inicializar 0(representando agua), criar uma funcao para posicionar os navios, celular com navio sera marcada com 1, criar uma funcao que permite ao jogador escolher uma celula, verificando se e acerto(navio), erro(agua) ou posição ja escolhida. criar um laço(loop) para permitir que o jogador constinue atacando aque que todos os navios sejam afundados e encerrar jogo quando todos os navios afundados.*/



let tabuleiro = [
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0]
]

function setarNavios(){
    tabuleiro[5][6] = 1
    tabuleiro[5][6] = 1
    tabuleiro[5][6] = 1
    tabuleiro[5][6] = 1
    tabuleiro[5][6] = 1
}
let soma = 0
for(let i = 0.i<tabuleiro.length;i++){
    for(let j=0;j<tabuleiro[i].length; j++)
        questidadeNavios+=tabuleiro[i][j]
}
let escolhaLinha = Number(prompt('escolha a linha que deseja atacar'))
let escolhaColuna = Number(prompt('escolha a coluna que deseja atacar'))

function verificaPosicao(linha,coluna){
 if(tabuleiro[linha][coluna]==1 ){
    console.log('acertou')
 }
}








