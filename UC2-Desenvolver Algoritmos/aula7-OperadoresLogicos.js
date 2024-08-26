//************************* Operadores  Lógicos **************************** //

// **********Exemplo 1: Operador E && :

/*
const primeiroValor = true
const segundoValor = true
const resultado = primeiroValor && segundoValor
console.log(resultado)// se dois true = true


// Exercicios:
const a = true
const b = false
const c = true
//1 Realize a operação: a && b
const resultado1 = a && b
console.log(resultado1)
//2 Realize a operação: b && c
const resultado2 = b && c
console.log(resultado2)
//3 Realize a operação: a && c
const resultado3 = a && c
console.log(resultado3)
//4 Realize a operação: a && b && c
const resultado4 = a && b && c
console.log(resultado4)

// **********Exemplo 2: Operador OU || : 

const primeiroValor = false
const segundoValor = false
const resultado = primeiroValor || segundoValor
console.log(resultado)// só sera false quando todos false


// Exercicios:
const a = true
const b = false
const c = true
//1 Realize a operação: a || b
const resultado1 = a || b
console.log(resultado1)
//2 Realize a operação: b || c
const resultado2 = b || c
console.log(resultado2)
//3 Realize a operação: a || c
const resultado3 = a || c
console.log(resultado3)
//4 Realize a operação: a || b || c
const resultado4 = a || b || c
console.log(resultado4)



/**********Exemplo 3: Operador NOT ! : 

const primeiroValor = false
const resultado = !primeiroValor
console.log(resultado)// inverte o valor, se true vira false


//Exercicios:

//o nome da pessoa
// a idade da pessoa
// um true ou false que diz se ela pe maior de idade
// quantos anos ela tera em 2050


let nome = prompt('Qual é o seu nome?')
let anoNascimento = prompt('Em que ano você nasceu?')
let anoAtual = prompt('Qual o ano atual?')
let idade = anoAtual - anoNascimento
let maiorIdade = idade >= 18
let idade2050 = 2050 - anoNascimento
console.log('Nome: ' + nome)
console.log('Idade: ' + idade + ' anos')
console.log('Maior de idade: ' + maiorIdade)
console.log('Idade em 2050: ' + idade2050 + ' anos')


//********************************EXERCICIOS DE INTERPRETAÇÃO:***********************************

//exercicio 1:
const bool1 = true 
const bool2 = false 
const bool3 = !bool2 

let resultado = bool1 && bool2 // resultado recebe  AND entre bool1 e bool2, que é false
console.log('a. ', resultado) //a false

resultado = bool1 && bool2 && bool3 // A variável AND entre bool1, bool2 e bool3, que ainda é false
console.log('b. ', resultado) // b false

resultado = !resultado && (bool1 || bool2) // A variável resultado AND entre resultado que é false e a operação OU entre bool1 e bool2, resulta em true
console.log('c. ', resultado)//  TRUE

console.log('d. ', typeof resultado) // d boollen, tipo é boolean



//exercicio 2:

let primeiroNumero = Number(prompt('Digite um numero:')) // converte para número
let segundoNumero = Number(prompt('Digite outro numero:')) // converte para número
const soma = primeiroNumero + segundoNumero //  soma dos convertidos
console.log(soma) 
*/

//********************************EXERCICIOS DE ESCRITA:*********************************** //


/*
//exercicio 1:
let idadeUsuario = Number(prompt('Qual é a sua idade?'))
let idadeAmigo = Number(prompt('Qual é a idade do seu melhor amigo ou da sua melhor amiga?'))
let idadeMaior = idadeUsuario > idadeAmigo
console.log('Sua idade é maior do que a do seu melhor amigo?', idadeMaior)
let diferencaIdade = idadeUsuario - idadeAmigo
console.log('Diferença de idade:', diferencaIdade)

//exercicio 2:
let numeroPar = Number(prompt('Insira um número par:'))
let resto = numeroPar%2
console.log('O resto da divisão do número por 2 é:', resto)
// Sempre que um número par, o resto da divisão por 2 é 0.
// Se o usuário inserir um número ímpar, o resto da divisão por 2 será 1.




//exercicio 3:

let idadeAnos = prompt('Qual é a sua idade em anos?') 
idadeAnos = idadeAnos//converte a entrada para inteiro
let idadeMeses = idadeAnos * 12
let idadeDias = idadeAnos * 365
let idadeHoras = idadeDias * 24
console.log('Sua idade em meses é: ' + idadeMeses)
console.log('Sua idade em dias é: ' + idadeDias)
console.log('Sua idade em horas é: '+ idadeHoras)


//exercicio 4:

let numero1 = prompt('Digite o primeiro número:')
let numero2 = prompt('Digite o segundo número:')
console.log('O primeiro número é maior que o segundo?', numero1 > numero2)
console.log('O primeiro número é igual ao segundo?', numero1 === numero2)
console.log('O primeiro número é divisível pelo segundo?', numero1 % numero2 === 0)
console.log('O segundo número é divisível pelo primeiro?', numero2 % numero1 === 0)

*/
// Desafio 1:
// a
let fahrenheit1 = 77
let kelvin1 = (fahrenheit1 - 32) * (5/9) + 273.15//Converte para Kelvin
console.log(fahrenheit1 + '°F é igual a ' + kelvin1 + 'K')

// b:
let celsius1 = 80
let fahrenheit2 = (celsius1 * (9/5)) + 32// Converte para Fahr
console.log(celsius1 + '°C é igual a ' + fahrenheit2 + '°F')

// c:
let celsius2 = 30
let fahrenheit3 = (celsius2 * (9/5)) + 32// Converte para Fahr
let kelvin2 = celsius2 + 273.15// Converte para Kelvin
console.log(celsius2 + '°C é igual a ' + fahrenheit3 + '°F e ' + kelvin2 + 'K')

// d:
let celsius3 = prompt('Digite a temperatura em graus Celsius:')
let fahrenheit4 = (celsius3 * (9/5)) + 32// Converte oara Farh
let kelvin3 = celsius3 + 273.15// Converte para Kelvin
console.log(celsius3 + '°C é igual a ' + fahrenheit4 + '°F e ' + kelvin3 + 'K')


// Desafio 2:
/*
// a:
let consumo = 280//quilowatthora consumidos
let custoPorKWh = 0.05 //custo por quilowatthora
let valorAPagar = consumo * custoPorKWh// calcula o valor a ser pago
console.log('O valor a ser pago por 280 kWh é R$' + valorAPagar)

// b:
let desconto = 15 
let valorComDesconto = valorAPagar * (1 - desconto / 100)// desconto aplicado
console.log('O valor a ser pago com 15% de desconto é R$' + valorComDesconto)


// Desafio 3:

// a: lb para kg
const lbParaKg = 20 * 0.453592  // multip 20 libras pelo fator de conversão para quilogramas
console.log('20lb equivalem a', lbParaKg, '1kg') 

// b)  oz para kg
const ozParaKg = 10.5 * 0.0283495  // multip 10.5 onças pelo fator de conversão para quilogramas
console.log('10.5oz equivalem a', ozParaKg, 'kg') 

// c:  mi para m
const miParaM = 100 * 1609.34  // multip 100 milhas pelo fator de conversão para metros
console.log('100mi equivalem a', miParaM, 'm')  

// d: ft para m
const ftParaM = 50 * 0.3048  // multip 50 pés pelo fator de conversão para metros
console.log('50ft equivalem a', ftParaM, 'm')  

// e: gal para l
const galParaL = 103.56 * 3.78541  // multip 103.56 galões pelo fator de conversão para litros
console.log('103.56gal equivalem a', galParaL, 'l')  

// f: xic para  l
const xicParaL = 450 * 0.24  // multip 450 xícaras pelo fator de conversão para litros
console.log('450xic equivalem a', xicParaL, 'l') 

// g: Modifica e prompt
const valorLb = prompt('Digite o valor em libras (lb) para converter em quilogramas (kg):')  

const lbParaKgUser = valorLb * 0.453592  // converte o valor  libra para quilograma
console.log(valorLb + 'lb equivalem a', lbParaKgUser, 'kg') 
