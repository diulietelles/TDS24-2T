//********************************EXERCICIOS DE INTERPRETAÇÃO:***********************************//
/*
Exercicio 1:
let a = 10
let b = 10
console.log(b)
b = 5
console.log(a, b)
*****Resposta
1- define a e b com valor 10
2- exibe o valor de b que é 10
3- atribui 5 a b
4- exibe os valores de a que continua 10 e b que agora é 5
10
10 5


Exercicio 2:
let a1 = 10
let b2 = 20
c = a
b = c
a = b
console.log(a, b,c)
*****Resposta
1- let a=10, b=20 e c=a que é 10 e b=20
2- c = a que é 10, não tem alterações
 b atualiza para 10, pois o c é 10
a = b que agora 10(sem mais alterações)
10 10 10


//Exercício 3:
*****Resposta 
let trabalha = prompt('Quantas horas voce trabalha por dia?') // pergunta quantas horas vc trabalha por dia
let recebe = prompt('Quanto voce recebe por dia?') // pergunta quanto o usuario recebe por dia 
console.log('voce recebe', trabalha,'/', recebe, 'por hora') // calcula e mostra quanto o usuario recebe por hora
//t e p sao variaveis strings
//prompt para perguntar ao usuario
//exibe no console a resposta 'voce recebe 25 / 10 por hora'
*/

//********************************EXERCICIOS DE ESCRITA:***********************************//

/*
Exercicio 1:
 declare uma variavel nome sem valor, declare uma variavel idade, sem valor
imprima na tela o tipo dessas variaveis com typeof
por que esse tipo foi impresso?
agora com prompt pergunte o usuario nome e idade
imprima na tela o tipo desas variaveis
imprima na tela' ola´, nome, 'voce tem 'idade, 'anos'

*****Resposta 
//1 e 2
let nome 
let idade 
//3
console.log(typeof nome) //  undefined
console.log(typeof idade) // undefined
//4
// como não atribui nenhum valor as variáveis 'nome' e 'idade', elas são undefined, não nada foi definido
//5
nome = prompt("Qual é o seu nome?")
idade = Number(prompt("Quantos anos você tem?"))
//6
console.log(typeof nome) // vai imprimir string
console.log(typeof idade) // vai imprimir number
//7
console.log("Olá, " + nome + ", você tem " + idade + " anos.")


//Exercicio 2:
/* escreva um programa que faca 3 perguntas de sim ou nao armazenando em uma variavel. Ex: voce esta usqando roupa azul hoje?
cite 3 novas variaveis contendo respostas
imprima na tela as perguntas com as respostas. Ex: voce esta usando uma roupa azul hoje? SIM 

//*****Resposta 
// a
let resposta1 = prompt('Você gosta de sushi?')
let resposta2 = prompt('Você tomou café da manhã?')
let resposta3 = prompt('Você gosta de ler livros?')

// b
console.log('Você gosta de sushi?' + resposta1)
console.log('Você tomou café da manhã? ' + resposta2)
console.log('Você gosta de ler livros? ' + resposta3)
*/

///Exercicio 3:

let a = 10
let b = 25

console.log('Antes de trocar:')
console.log('a = ' + a) // a = 10
console.log('b = ' + b) // b = 25

// variavel temporaria:
let temp = a //  agora armazena o valor de a que é 10
a = b      // agora a  recebe o valor de b que é 25
b = temp //b agora recebe o valor armazenado em temp

console.log('Depois de trocar:')
console.log('a = ' + a)// a = 25
console.log('b = ' + b)// b = 10