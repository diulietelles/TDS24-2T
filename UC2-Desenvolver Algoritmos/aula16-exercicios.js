//Exercicios de Fixação 

//********************************EXERCICIOS DE INTERPRETAÇÃO:***********************************//

/* exercicio 1:  


a) retorna o valor da variável multiplicado por 5
console.log(minhaFuncao(2))  // retorna 10
console.log(minhaFuncao(10))  // retorna 50 

b) a função ainda será executada, mas os resultados não serão mostrados no console, pois nao tera comando para ser impresso ja que nao tem console.

/*exercicio 2:


a) A função outraFuncao converte  para letras minúsculas e verifica se 'cenoura' está presente. independentemente se maiúsculas ou minúsculas
b) As saídas  são todas true, já que em todos os casos a palavra 'cenoura' esta no texto.



//********************************EXERCICIOS DE ESCRITA:*********************************** */

/*  Exercicio 1:  */


function informacoesSobreCaio() {
  console.log('Eu sou Caio, tenho 23 anos, moro em São Paulo e sou estudante.')  
}
informacoesSobreCaio()

function informacoesSobreMim() {
    console.log('Eu sou Diulie, tenho 29 anos, moro no Rio Grande do Sul e sou estudante.')  
  }
  informacoesSobreMim()


  /* Exercicio 2: */


// a) 
function somar(numero1, numero2) {
  return numero1 + numero2 
}
console.log(somar(5, 10)) 

// b)
function maiorOuIgual(numero1, numero2) {
  return numero1 >= numero2  
  
}
console.log(maiorOuIgual(10, 5)) 

// c) 
function ePar(numero) {
  return numero % 2 === 0  
}
console.log(ePar(4))  

// d) 
function processarMensagem(mensagem) {
  console.log('Tamanho da mensagem:', mensagem.length)  // imprime o tamanho
  console.log('Mensagem em maiúsculas:', mensagem.toUpperCase())  // imprime letra maiuscula
  
}
processarMensagem('eu adoro chimarrão')  


/* Exercício 3:  */ 

function soma(a, b) {
  return a + b  
}

function subtracao(a, b) {
  return a - b  
}

function multiplicacao(a, b) {
  return a * b  
}

function divisao(a, b) {
  return a / b 
}


const num1 = Number(prompt('Digite o primeiro número'))
const num2 = Number(prompt('Digite o segundo número'))


console.log('Soma:', soma(num1, num2))
console.log('Subtração:', subtracao(num1, num2))
console.log('Multiplicação:', multiplicacao(num1, num2))
console.log('Divisão:', divisao(num1, num2))*/




// Desafio 1:

//a) Arrow function:
const imprimirParametro = parametro => {
    console.log(parametro)  //imprime recebendo parametro
  }
  
  // b) crio outra arrow function que recebe dois valores como parâmetros, faz a soma e chama a primeira função para imprimir o resultado
  const somarEImprimir = (val1, val2) => {
    const soma = val1 + val2  // Faz a soma 
    imprimirParametro(soma)  
  }
  somarEImprimir(10, 15) 


// Desafio 2
function adicionarItem(inventario, item) {
    if (inventario.length >= 5) {  
      console.log('Inventário cheio')  
    } else {
      inventario.push(item)  // add um item
      console.log(`Item "${item}" adicionado ao inventário`)  /
    }
}
  
  
  function removerItem(inventario, item) {
    const index = inventario.indexOf(item)  // encontra item
    if (index === -1) {  
      console.log('Item não encontrado')  
    } else {
      inventario.splice(index, 1)  // rm o item
      console.log(`Item "${item}" removido do inventário`)  
    }
  }
  
  function listarItens(inventario) {
    if (inventario.length === 0) {  // se vazio
      console.log('Inventário vazio')  
    } else {
      console.log('Itens no inventário:', inventario)  //lista os itens
    }
  }
  
  
  let inventario = []  // comecar vazio
  
  adicionarItem(inventario, 'Espada')  // add 'Espada'
  adicionarItem(inventario, 'Escudo')  // add 'Escudo'
  adicionarItem(inventario, 'Poção')  // add 'Poção'
  adicionarItem(inventario, 'Arco')  // add 'Arco'
  adicionarItem(inventario, 'Flechas')  // add 'Flechas'
  adicionarItem(inventario, 'Lanterna')  // tenta adicionar item extra
  
  removerItem(inventario, 'Poção')  // rm 'Poção'
  removerItem(inventario, 'Cajado')  // tenta um item que nao tem na lista
  listarItens(inventario)  // lista todos os itens





