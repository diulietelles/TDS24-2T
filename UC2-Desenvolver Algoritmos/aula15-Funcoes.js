//************************* Funcoes  ****************************//

/* Exemplo 1: 

function calculaArea(largura, altura){
    const area = largura * altura
    console.log(area)
}
calculaArea(2,3)
calculaArea(5,4)
calculaArea(7,9)*/



/* Exemplo 2: 


function imprimirOlaMundo(){
    console.log('Ola Mundo')
}
imprimirOlaMundo()


function imprimirNome(nome){
    console.log('Bem vindo:', nome)
}
imprimirNome('Rebeca')
imprimirNome('João')*/


/* Exercicios: 

//1
function imprimirFrase(){
    console.log('Bem vindo Turma 24-2T!')
}
imprimirFrase()

//2
function imprimirSoma (numero1, numero2){
    const soma = numero1 + numero2
    console.log('A soma é:', soma)
}
imprimirSoma(10,20)

//3
function calculaDobro(numero){
    const dobro = numero * 2
    console.log('O dobro do numero é:', dobro)
}
calculaDobro(5) 

// Exercicios 2: 

//1
function imprimirNomes(nome){
    console.log(`Ola ${nome}`)
}
imprimirNomes('Du')
imprimirNomes('Di')
imprimirNomes('Gabriel')

//2
function imprimirSoma(numero1, numero2){
    const soma = numero1 + numero2
    console.log(`A soma é: ${soma}`)

}
imprimirSoma(2,3)
imprimirSoma(8,33)

//3 : jogo dos papeis
function imprimirFrase(nome){
    console.log(`Bem vinda ${nome}, continue explorando cada linha de código!`)
}
imprimirFrase('Yasmin')*/



/* Exemplo 3: 

function calcularArea(largura, altura){
    const resultadoArea = largura * altura
    return resultadoArea
}
let area = calcularArea(2,3)
console.log(`A area é: ${area}`)
console.log('A area é:', calcularArea(2,3))*/

/* Exercicios 3: 

//1
function imprimirSoma(numero1, numero2){
    const resultadoSoma = numero1 + numero2
    return resultadoSoma
}
let soma = imprimirSoma(2,3)
console.log(`A soma é: ${soma}`)


//2
let numerosOriginal = [233,43,634,64,27,6] //array criado
function primeiroUltimo(arrayNumeros){ //funcao paraa receber uma variavel
    const novoArray = [] //novo array
    novoArray.push(arrayNumeros[0]) //primeiro numero
    novoArray.push(arrayNumeros[arrayNumeros.lenght-1]) //segundo numero e -1 para pegar a ultima posição
    return novoArray //array na posicao 0 e o ultimo

}

console.log(primeiroUltimo(numerosOriginal)) //chamar a funcao. retorna o novo array e passa dentro dele




//Exemplos 4: expressao de função

//1
const calculaArea = function(largura,altura){
    const soma = largura * altura
    return soma
}
const resultado = calculaArea(2,5)


//2
imprimirNome = function(nome){
    console.log(`Bem vindo: ${nome}`)
}
imprimirNome('Rebeca')



//Arrow Functions:


const calculaArea = (largura, altura) =>{
    const resulatado = largura * altura
    return resulatado
}

const area = calculaArea(2,7)
console.log(`A area é: ${area}`)*/



/*Exercicios

//2
const imprimirSoma = function(num1, num2){
    return num1 + num2
}
console.log('A soma dos numeros é:', imprimirSoma(2,5))


//3
const calculaDobro = (numero)=>{
   return numero * 2
}
const numero = Number(prompt('Digite um numero:'))
console.log('O dobro de', numero, 'é', calculaDobro(numero))*/


/* funcoes anonimas: foi declarado com expressoes de funcoes ou arrow funcnion

// Exercicio 5:
criar uma funcao chamada deterrminaMonstro que recebe algumas caracteristicas em booleans e determina 
se a criatura é um vampiro, um lobsomem ou um humano
a funcao deve retornar uma string com o tipo de criatura
coloque consf=dicoes dentro da funcaao para identifdicar a criatura
dicas de caracteristicas: temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSededeSangue*/



function determinaMonstro(temPeleGelada, transformaComLuaCheia, brilhaAoSol, temSedeDeSangue) {
    
    if (temPeleGelada && temSedeDeSangue && brilhaAoSol) {
        return 'Vampiro'
    
    } else if (transformaComLuaCheia) {
        return 'Lobinho' 
    
    } else {
        return 'Humano'
    }
}
console.log(determinaMonstro(true, false, true, true)) 
console.log(determinaMonstro(false, true, false, false)) 
console.log(determinaMonstro(false, false, false, false)) 



