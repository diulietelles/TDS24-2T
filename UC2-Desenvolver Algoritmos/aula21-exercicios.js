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


//Exercicio 3: 

let matriz = [
  [1, 2, 3, 4],
  [5, 6, 7, 8], 
  
  [9, 10, 11, 12],
  [13, 14, 15, 16]
]

for (let i = 0; i < matriz.length; i++) { // // loop que inverte os valores de cada linha da matriz
  let linhaInvertida = [] // array vazio para armazenar a linha invertida
  for (let j = matriz[i].length - 1; j >= 0; j--) { // percorre a linha de tras para frente (colocando o -1, inicia a contagem na ultima posição)
    linhaInvertida.push(matriz[i][j]) //add o valor da posicao j da linha original ao array invertido
  }
  matriz[i] = linhaInvertida // substitui a linha original pela linha invertida
}

for (let i = 0; i < matriz.length; i++) { // linha invertida
  console.log(matriz[i].join(' | '))//cada linha da matriz com valores invertidos (join para separar)
}



// Desafio:
// 1. Gerar a Ilha
function gerarIlha() {
  let ilha = []
  for (let i = 0; i < 10; i++) {
    let linha = []
    for (let j = 0; j < 10; j++) {
      let valorAleatorio = Math.floor(Math.random() * 5) // Valores de 0 a 4
      linha.push(valorAleatorio)
    }
    ilha.push(linha)
  }
  return ilha
}

// Função para imprimir a ilha
function imprimirIlha(ilha) {
  ilha.forEach(linha => {
    console.log(linha.map(cell => {
      if (cell === 0) return 'grama'
      if (cell === 1) return 'água'
      if (cell === 2) return 'floresta'
      if (cell === 3) return 'carnívoro'
      if (cell === 4) return 'herbívoro'
    }).join(' | '))
  })
} 


// 2. Movimentar Dinossauros
function moverDinossauros(ilha, direcao) {
  const movimentos = {
    cima: [-1, 0],
    baixo: [1, 0],
    esquerda: [0, -1],
    direita: [0, 1],
  }

  let movimento = movimentos[direcao]

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (ilha[i][j] === 3 || ilha[i][j] === 4) { // Se for dinossauro
        let novoI = i + movimento[0]
        let novoJ = j + movimento[1]

        // Verificar se a nova posição está dentro dos limites
        if (novoI >= 0 && novoI < 10 && novoJ >= 0 && novoJ < 10 && ilha[novoI][novoJ] === 0) {
          ilha[novoI][novoJ] = ilha[i][j] // Move dinossauro para a nova posição
          ilha[i][j] = 0 // A posição antiga vira grama
        }
      }
    }
  }
}

// 3. Contar Dinossauros Restantes
function contarDinossauros(ilha) {
  let carnivoros = 0
  let herbivoros = 0

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (ilha[i][j] === 3) carnivoros++
      if (ilha[i][j] === 4) herbivoros++
    }
  }

  console.log(`Carnívoros restantes: ${carnivoros}`)
  console.log(`Herbívoros restantes: ${herbivoros}`)
}

// Testando o código
let ilha = gerarIlha()
console.log("Ilha inicial:")
imprimirIlha(ilha)

moverDinossauros(ilha, 'direita')
console.log("Ilha após movimentação:")
imprimirIlha(ilha)

contarDinossauros(ilha)







