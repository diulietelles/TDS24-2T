/*Desafio:
//1
let frase = 'Receba uma frase e retorne um array'
let palavras = frase.split(' ')
console.log(palavras) 

//2
let frutas = ['Banana', 'Morango', 'Abacaxi', 'Laranja', 'Ameixa']
let indice = frutas.indexOf('Abacaxi')
console.log(indice) // 2
console.log(frutas.length) // 5


//Exercicio 1:
// a) 
let num1 = 5
let num2 = 5

// b) 
if (num1 === num2) {
    // c) se os números forem iguais, imprime uma mensagem 
    console.log('Os números são iguais. Sucesso!')
}


//Exercicio 2:

// a) 
num1 = 7
num2 = 10

// b) 
if (num1 === num2) {
    console.log('Os números são iguais.')
} else {
    console.log('Os números são diferentes.')
}

//Exercicio 3:

// a)
num1 = 8
num2 = 12

// b) 
if (num1 > num2) {
    console.log('O primeiro número é maior que o segundo.')
} else if (num1 < num2) {
    console.log('O primeiro número é menor que o segundo.')
} else {
    console.log('Os números são iguais.')
}

// Exercício 1: SWITCH CASE


function escolherPokemon(pokemon) {
    switch (pokemon.toLowerCase()) {
        case 'bulbasaur':
            console.log('Bulbasaur é do tipo Planta e Veneno.')
            break
        case 'charmander':
            console.log('Charmander é do tipo Fogo.')
            break
        case 'squirtle':
            console.log('Squirtle é do tipo Água.')
            break
        default:
            console.log('Escolha inválida de Pokémon.')
    }
}

// Exercício 2: 
function escolherCasa(aluna) {
    switch (aluna.toLowerCase()) {
        case 'hermione':
            console.log('Hermione vai para Grifinória.')
            break
        case 'ana':
            console.log('Ana vai para Lufa-lufa.')
            break
        case 'luna':
            console.log('Luna vai para Corvinal.')
            break
        case 'narcisa':
            console.log('Narcisa vai para Sonserina.')
            break
        default:
            console.log('Aluna não identificada.')
    }
}

// Exercício 3: 
function podeEstudarNaFaculdade(concluiuEnsinoMedio, idade, cursandoOutraFaculdade) {
    if (concluiuEnsinoMedio && idade >= 18 && !cursandoOutraFaculdade) {
        console.log('A pessoa pode estudar na faculdade.')
    } else {
        console.log('A pessoa não pode estudar na faculdade.')
    }
}

*/
// Desafio
function jogarPPTLS(escolhaUsuario) {
    const escolhas = ['pedra', 'papel', 'tesoura', 'lagarto', 'spock']
    const escolhaComputador = escolhas[Math.floor(Math.random() * 5)]

    console.log('Usuário escolheu ' + escolhaUsuario)
    console.log('Computador escolheu: ' + escolhaComputador)

    switch (escolhaUsuario) {
        case 'pedra':
            if (escolhaComputador === 'tesoura' || escolhaComputador === 'lagarto') {
                console.log('Pedra ganha!')
            } else if (escolhaComputador === 'papel' || escolhaComputador === 'spock') {
                console.log('Computador ganha!')
            } else {
                console.log('Empate!')
            }
            break
        case 'papel':
            if (escolhaComputador === 'pedra' || escolhaComputador === 'spock') {
                console.log('Papel ganha!')
            } else if (escolhaComputador === 'tesoura' || escolhaComputador === 'lagarto') {
                console.log('Computador ganha!')
            } else {
                console.log('Empate!')
            }
            break
        case 'tesoura':
            if (escolhaComputador === 'papel' || escolhaComputador === 'lagarto') {
                console.log('Tesoura ganha!')
            } else if (escolhaComputador === 'pedra' || escolhaComputador === 'spock') {
                console.log('Computador ganha!')
            } else {
                console.log('Empate!')
            }
            break
        case 'lagarto':
            if (escolhaComputador === 'spock' || escolhaComputador === 'papel') {
                console.log('Lagarto ganha!')
            } else if (escolhaComputador === 'pedra' || escolhaComputador === 'tesoura') {
                console.log('Computador ganha!')
            } else {
                console.log('Empate!')
            }
            break
        case 'spock':
            if (escolhaComputador === 'tesoura' || escolhaComputador === 'pedra') {
                console.log('Spock ganha!')
            } else if (escolhaComputador === 'papel' || escolhaComputador === 'lagarto') {
                console.log('Computador ganha!')
            } else {
                console.log('Empate!')
            }
            break
        default:
            console.log('Escolha inválida.')
    }
}

jogarPPTLS('lagarto')
