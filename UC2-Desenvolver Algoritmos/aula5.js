// EXERCIOS DE INTERPRETAÇÃO:
/*
Exercicio 1
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


Exercicio 2
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


//Exercício 3 
*****Resposta 
let trabalha = prompt('Quantas horas voce trabalha por dia?') // pergunta quantas horas vc trabalha por dia
let recebe = prompt('Quanto voce recebe por dia?') // pergunta quanto o usuario recebe por dia 
console.log('voce recebe', trabalha,'/', recebe, 'por hora') // calcula e mostra quanto o usuario recebe por hora
//t e p sao variaveis strings
//prompt para perguntar ao usuario
//exibe no console a resposta 'voce recebe 25 / 10 por hora'
*/

//EXERCIOS DE ESCRITA:

/*
declare uma variavelnome sem valor, declare uma variavel idade, sem valor
imprima na tela o tipo dessas variaveis com typeof
pq esse tipo foi impresso?
agora com prompt pergunte o usuario nome e idade
imprima na tela o tipo desas variaveis
imprima na tela' ola´, nome, 'voce tem 'idade, 'anos'
*/


let nome;
let idade;
console.log(typeof nome); //  undefined
console.log(typeof idade); // undefined

// Por que esse tipo foi impresso?
// omo não atribui nenhum valor as variáveis 'nome' e 'idade', elas são undefined, não nada foi definido

//prompt:
nome = prompt("Qual é o seu nome?");
idade = prompt("Quantos anos você tem?");

//typeof:
console.log(typeof nome); // vai imprimir string
console.log(typeof idade); // vai imprimir string
console.log("Olá, " + nome + ", você tem " + idade + " anos.");


