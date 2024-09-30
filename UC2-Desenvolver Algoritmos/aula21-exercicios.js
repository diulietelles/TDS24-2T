//Exercicios de Fixação 

//****************************EXERCICIOS DE INTERPRETAÇÃO:********************************//

//Exercicio 1:

// a) o valor 16, acessa o elemento na terceira linha(indice 2) e a segunda coluna(indice 1).

//Exercicio 2:

//a) 2,4 e 6: imprime apenas os numeros pares, aqueles que divididos por 2 é resto 0.

//Exercicio 3:

//a) o codigo percorre todos os elemrntos da amtriz e soma cada um deles, 270.


//********************************EXERCICIOS DE ESCRITA:***********************************//

//Exercicio 1:
let mapa = [] //array para inicializar

//loop para mapa 5x5
for (let i = 0; i < 5; i++) {
  let linha = [] // nova linha
  for (let j = 0; j < 5; j++) {
    let terreno = Math.floor(Math.random() * 3)//gera um numero aleatorio entre 0 e 2
  
    if (terreno === 0) {   // mapeia os numeros para palavras
      linha.push('grama')  // add grama se o número for 0
    } else if (terreno === 1) {
      linha.push('água')   // add agua se o numero for 1
    } else {
      linha.push('montanha') // add montanha se o nmero for 2
    }
  }
  mapa.push(linha)  // add a linha completa do mapa
}
for (let i = 0; i < mapa.length; i++) {
  console.log(mapa[i].join('| ')) // imprime com separadores (join)
}


//Exercicio 2:

// Cria uma matriz 2D que armazena as ontuacoes
let pontuacoes = [
  [15, 25, 35, 45],  //jogador 1
  [10, 20, 30, 40],  //jogador 2
  [5,  10, 15, 20]   //jogador 3
]
let pontuacaoTotal = [0, 0, 0] // armazena a pontuacao total de cada jogador


for (let i = 0; i < pontuacoes.length; i++) { //  loop que calcula a pontuacao total de cada jogador
  for (let j = 0; j < pontuacoes[i].length; j++) { // para cada rodada
    pontuacaoTotal[i] += pontuacoes[i][j] // add a pontuacao da rodada a pontuação total do jogador
  }
}
for (let i = 0; i < pontuacaoTotal.length; i++) {
  console.log(`Pontuação total do jogador ${i + 1}: ${pontuacaoTotal[i]}`) // imprime cada pontuaçao de cada jogador
}

