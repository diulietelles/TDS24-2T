/* Contador simples: */
console.log('Contador Simples:') 
for (let i = 1; i <= 10; i++) {  // laço que vai de 1 até 10, incrementando 1 a cada iteração
    console.log(i)  //valor de i
}

/* Contador de pares: */
console.log('Contador de Pares:')  
for (let i = 2; i <= 20; i += 2) {  // laço que vai de 2 até 20, incrementando de 2 em 2
    console.log(i)  //valor de i
}

/* Tabuada: */
let num = prompt('Digite um número para ver a tabuada:')  
console.log(Tabuada do ${num}:)  
for (let i = 1; i <= 10; i++) {  // Laço que percorre os números de 1 a 10
    console.log(${num} x ${i} = ${num * i})  //multip do valor i
}

/* Soma de Números: */
let soma = 0 
console.log('Soma de 5 números:')  
for (let i = 1; i <= 5; i++) {  // laço que percorre 5 numeros
    let numero = Number(prompt(Digite o número ${i}:))
    soma += numero  // Soma o número fornecido à variável soma
}
console.log('Soma total: ' + soma)  

/* Média de Notas: */
let totalNotas = 0  
console.log('Média de Notas:')  
for (let i = 1; i <= 5; i++) {  // laço que percorre 5 notas
    let nota = Number(prompt(Digite a nota do aluno ${i}:))  
    totalNotas += nota  
}
let media = totalNotas / 5  // calcula a média das notas
console.log("Média das notas: " + media)  

/* Jogo da Forca: */
let palavras = ['javascript', 'programacao', 'desafio', 'computador', 'internet']  // define as palavras do jogo
let palavra = palavras[Math.floor(Math.random() * palavras.length)]  // seleciona uma palavra aleatoriamente
let palavraAdivinhada = ''.repeat(palavra.length).split('')  //um array de caracteres '' do tamanho da palavra
let tentativas = 6  // Define quantas tentativas
console.log('Jogo da Forca:') 
while (tentativas > 0 && palavraAdivinhada.includes('_')) {  // laço que continua até acabarem as tentativas\palavra ser adivinhada
    let letra = prompt(Adivinhe uma letra: ${palavraAdivinhada.join('')}) 
    if (palavra.includes(letra)) {  // verifica se tem a letra
        for (let i = 0; i < palavra.length; i++) {  // laço para encontrar a posição da letra na palavra
            if (palavra[i] === letra) {  // Se a letra estiver na posição i da palavra
                palavraAdivinhada[i] = letra  // atualiza o array com a letra adivinhada
            }
        }
    } else {
        tentativas--  // Diminui uma tentativa se a letra estiver incorreta
        console.log(Letra errada! Tentativas restantes: ${tentativas})  
}
if (palavraAdivinhada.join('') === palavra) {  // verifica se a palavra foi adivinhada completamente
    console.log('Parabéns! Você adivinhou a palavra: ' + palavra) 
} else {
    console.log('Fim de jogo! A palavra era: ' + palavra) 
}

}


/* Validador de CPF: */
let cpf = prompt('Digite um CPF (somente números):')  
if (cpf.length === 11) {  // verifica se  11 dígitos
    console.log('CPF válido')  
} else {
    console.log('CPF inválido')  
}

/* Simulador de Caixa Eletrônico: */
let saque = Number(prompt('Digite o valor do seu saque:'))  
console.log('Notas entregues:')  
let notas = [100, 50, 20, 10, 5, 2, 1]  // define notas disponíveis
for (let nota of notas) {  // laço para verificar quantas notas de cada valor serão entregues
    let quantidade = Math.floor(saque / nota)  // calcula a quantidade de notas de cada valor
    if (quantidade > 0) {  // Se houver notas a serem entregues
        console.log(${quantidade} nota(s) de R$${nota})  
        saque -= quantidade * nota  // subtrai o valor das notas entregues do saque restante
    }
}

/* Ordenação de Array: */
let numeros = prompt('Digite uma lista de números separados por vírgula:').split(',').map(Number) 
for (let i = 0; i < numeros.length; i++) {  // laço comparar cada número
    for (let j = i + 1; j < numeros.length; j++) {  // laço comparar o número atual com os proximos
        if (numeros[i] > numeros[j]) {  // se o número na posição i for maior j
            let temp = numeros[i]  // armazena o valor de i temporariamente
            numeros[i] = numeros[j]  // troca os valores de i e j
            numeros[j] = temp  // atribui o valor temporário à posição j
        }
    }
}
console.log('Array ordenado: ' + numeros)