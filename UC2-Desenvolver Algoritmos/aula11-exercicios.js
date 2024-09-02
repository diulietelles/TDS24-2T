/*Exercicios de Fixação 

//********************************EXERCICIOS DE INTERPRETAÇÃO:***********************************

//Exercicio 1:


//a) o código verifica se o número digitado pelo usuário é par (resto da divisão por 2 igual a 0)

//b) ele imprime 'Passou no teste.' para números pares

//c) a mensagem 'Não passou no teste'. é impressa para números ímpares



//Exercicio 2:

//a) o código atribui um preço a uma fruta selecionada pelo usuário e exibe esse preço no console

//b) o preço da fruta Maçã é R$ 2.25

//c) o preço da fruta Pera é R$ 5.0





//Exercicio 3:

//a) está pedindo ao usuário para inserir um número e converte  entrada para um tipo number

//b) sse número passou no teste, nenhuma mensagem será exibida

//c) sim, um erro para acessar a variável mensagem fora do bloco if, pois ela está definida dentro do escopo
*/



//********************************EXERCICIOS DE ESCRITA:***********************************//

/*Exercicio 1:

const idadeUsuario = Number(prompt('Qual é a sua idade?'))

if (idadeUsuario >= 18) {
  console.log('Obaa, Você pode dirigir :D') 
} else {
  console.log('Buaah, você não pode dirigir TT')
}

//Exercicio 2:


const turno = prompt('Digite o turno que você estuda (M para Matutino, V para Vespertino, N para Noturno):').toUpperCase()// vai entender se o usuario digitar letra maiuscula ou minuscula


if (turno === 'M') {
  console.log('Bom Dia!')
} else if (turno === 'V') {
  console.log('Boa Tarde!')
} else if (turno === 'N') {
  console.log('Boa Noite!')
} else {
  console.log('Turno inválido.')
}

//SWITCH:

const turno = prompt("Digite o turno que você estuda (M para Matutino, V para Vespertino, N para Noturno):").tolowerCase() // vai entender se o usuario digitar letra maiuscula ou minuscula

switch (turno) {
  case 'M':
    console.log('Bom Dia!')
    break
  case 'V':
    console.log('Boa Tarde!')
    break
  case 'N':
    console.log('Boa Noite!')
    break
  default:
    console.log('Turno inválido.')
    break
}



// Exercicio 3:

const generoFilme = prompt('Qual o gênero do filme que vão assistir?').toLowerCase()
const precoIngresso = Number(prompt('Qual o preço do ingresso?'))


if (generoFilme === 'fantasia' && precoIngresso < 15) {
  console.log('Uhuuul, ja pode pegar a pipoca!')
} else {
  console.log('#SEMGRANA :(')
}


//Desafio 1:

const generoFilme = prompt('Qual o gênero do filme que vocês vão assistir?').toLowerCase()
const precoIngresso = Number(prompt('Qual o preço do ingresso?'))

if (generoFilme === 'fantasia' && precoIngresso < 15) {
  const lanchinho = prompt('Qual lanche você vai comprar para acompanhar o filme?')
  console.log(`Bom filme! Aproveite com ${lanchinho}!`)
} else {
  console.log('Escolha outro filme :(')
}

*/


// Desafio 2:

const nomeCompleto = prompt('Digite seu nome completo:')
const tipoJogo = prompt('Qual o tipo de jogo? (IN para Internacional, DO para Doméstico)').toUpperCase()
const etapaJogo = prompt('Qual a etapa do jogo? (SF para Semifinal, DT para Decisão do 3º lugar, FI para Final)').toUpperCase()
const categoria = Number(prompt('Qual a categoria do ingresso? Digite 1, 2, 3, ou 4:'))
const quantidaIngressos = Number(prompt('Quantos ingressos você deseja comprar?'))

// defino o valor do ingresso conforme tipo e etapa do jogo:
let valorIngresso

if (etapaJogo === 'SF') {
  if (categoria === 1) valorIngresso = 1320
  else if (categoria === 2) valorIngresso = 880
  else if (categoria === 3) valorIngresso = 550
  else if (categoria === 4) valorIngresso = 220
} else if (etapaJogo === 'DT') {
  if (categoria === 1) valorIngresso = 660
  else if (categoria === 2) valorIngresso = 440
  else if (categoria === 3) valorIngresso = 330
  else if (categoria === 4) valorIngresso = 170
} else if (etapaJogo === 'FI') {
  if (categoria === 1) valorIngresso = 1980
  else if (categoria === 2) valorIngresso = 1320
  else if (categoria === 3) valorIngresso = 880
  else if (categoria === 4) valorIngresso = 330
}

// jogo internacional = dólar:
const valorDolar = 5.65
if (tipoJogo === 'IN') {
  valorIngresso *= valorDolar
}

//valor total dos ingressos:


const valorTotal = valorIngresso * quantidaIngressos

console.log('|¨¨¨¨ Dados da compra ¨¨¨¨|')
console.log('Nome do Cliente:', nomeCompleto)
console.log('Tipo de Jogo:', tipoJogo === 'IN' ? 'Internacional' : 'Doméstico')
console.log('Etapa do Jogo:', etapaJogo === "SF" ? 'Semifinal' : etapaJogo === 'DT' ? 'Decisão do 3º lugar' : 'Final')
console.log('Categoria:', categoria)
console.log('Quantidade de Ingressos:', quantidaIngressos)
console.log('Valor do Ingresso: R$', valorIngresso.toFixed(2)) //toFixed: para arredondar os numeros ou 2 casas
console.log('Valor Total: R$', valorTotal.toFixed(2))



































