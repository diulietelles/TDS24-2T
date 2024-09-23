// Importa a biblioteca readline-sync que permite interação do usuário no terminal
const readlineSync = require('readline-sync') 

// Declara o array que vai armazenar os personagens criados
let personagens = [] 

// Função para criar um novo personagem a partir de perguntas para o usuário:
/* 
   - Objetivo: Criar um novo personagem a partir das informações fornecidas pelo usuário.
   - Entradas: Solicita ao usuário o nome, classe, nível, pontos de vida (HP) e habilidades do personagem.
   - Processo: split para dividir a string de habilidades em um array, onde a vírgula separa
   - Saída: Retorna um objeto que representa o personagem, contendo suas propriedades e um histórico de ações vazio.
*/
function criarPersonagemComPrompt() {
    let nome = readlineSync.question('Digite o nome do personagem: ') 
    let classe = readlineSync.question('Digite a classe do personagem: ') 
    let nivel = Number(readlineSync.question('Digite o nível do personagem: ')) 
    let hp = Number(readlineSync.question('Digite os pontos de vida (HP) do personagem: ')) 
    let habilidades = readlineSync.question('Digite as habilidades do personagem: ').split(',') 

    return {
        nome: nome, // Define o nome do personagem
        classe: classe, // Define a classe do personagem
        nivel: nivel, // Define o nível do personagem
        hp: hp, // Define os pontos de vida do personagem
        habilidades: habilidades, // Define as habilidades do personagem
        historicoAcoes: [] // Inicia o histórico de ações como um array vazio
    }
}

/* 
   Função para registrar uma ação no histórico do personagem:
   - Objetivo: Armazenar uma ação realizada pelo personagem no seu histórico.
   - Entradas: Recebe um objeto personagem e uma string que representa a ação a ser armazenada.
   - Processo: Utiliza o método push para adicionar a ação ao array historicoAcoes do personagem e imprime a ação realizada no console. 
*/
function registrarAcao(personagem, acao) {
    personagem.historicoAcoes.push(acao) // Adiciona a ação ao histórico do personagem
    console.log(personagem.nome + ' realizou a ação: ' + acao) // Exibe a ação realizada no console
}

/* 
   Função para exibir detalhes de um personagem no formato de tabela:
   - Objetivo: Exibir todos os detalhes do personagem de forma organizada na tabela
   - Processo: Imprime as informações do personagem no console, o método 'join' é usado para separar as habilidades em uma string, usando ',',verifica(lenght > 0, se maior que 0, tem informaçoes) se o histórico de ações contém alguma ação(if), se não houver, exibe 'Nenhum'(else).
*/
function exibirDetalhes(personagem) {
    console.log('--------------------------------------------------')
    console.log('| Nome          | ' + personagem.nome)
    console.log('| Classe        | ' + personagem.classe)
    console.log('| Nível         | ' + personagem.nivel)
    console.log('| HP            | ' + personagem.hp)
    console.log('| Habilidades   | ' + personagem.habilidades.join(', '))

    if (personagem.historicoAcoes.length > 0) {
        console.log('| Histórico     | ' + personagem.historicoAcoes.join(', '))
    } else { 
        console.log('| Histórico     | Nenhum') // Exibe 'Nenhum' se não houver ações
    }

    console.log('--------------------------------------------------')
}

/* 
   Função para adicionar personagem ao array:
   - Objetivo: Adicionar um novo personagem ao array que armazena todos os personagens.
   - Processo: Utiliza o método push para inserir o personagem no array e imprime uma mensagem de confirmação no console
*/
function adicionarPersonagem(personagem) {
    personagens.push(personagem) // Adiciona o personagem ao array 'personagens'
    console.log(personagem.nome + ' foi adicionado milorde.') // Confirma que o personagem foi adicionado
}

/* 
   Função para buscar personagem por nome:
   - Objetivo: Localizar um personagem específico no array pelo seu nome
   - Processo: Percorre o array personagens utilizando um loop, comparando o nome de cada personagem com o nome fornecido. Se encontrar, retorna o personagem, caso contrário, retorna null.
*/
function buscarPersonagem(nome) {
    for (let i = 0; i < personagens.length; i++) { //O loop continua até que i seja igual ao número total de personagens, garantindo que cada um  seja acessado
        if (personagens[i].nome === nome) { // Verifica se o nome do personagem corresponde ao nome buscado
            return personagens[i] // Retorna o personagem se for encontrado
        }
    }
    return null // Retorna 'null' se o personagem não for encontrado
}

// Função para listar todos os personagens em formato de tabela
function listarPersonagens() {
    // Imprime a linha inicial da tabela
    console.log('--------------------------------------------------')

    // Imprime o cabeçalho da tabela com as colunas Nome, Classe, Nível e HP
    console.log('| Nome            | Classe        | Nível | HP  |')

    // Imprime a linha que separa o cabeçalho dos dados
    console.log('--------------------------------------------------')

    // loop que percorre todo o array de personagens
    for (let i = 0; i < personagens.length; i++) {
        const personagem = personagens[i]; // Acessa o personagem atual no índice 'i'


/* Concatena e imprime as informações de nome, classe, nível e HP do personagem atual
repeat adiciona um número fixo de espaços, garantindo que todos os dados alinhados
toString converte números (nível do personagem e o HP em strings
Nome: 16 caracteres no total
Classe:  14 caracteres no total
Nível: 6 caracteres no total
HP:  4 caracteres no total
*/

        console.log(
            '| ' + personagem.nome + ' '.repeat(16 - personagem.nome.length) + 
            '| ' + personagem.classe + ' '.repeat(14 - personagem.classe.length) + 
            '| ' + personagem.nivel + ' '.repeat(6 - personagem.nivel.toString().length) + 
            '| ' + personagem.hp + ' '.repeat(4 - personagem.hp.toString().length) + '|'
        )
    }

    // Imprime a linha final da tabela
    console.log('--------------------------------------------------');
}


/* 
   Função para excluir um personagem:
   - Objetivo: Remover um personagem do array com base no nome fornecido
   - Processo: Percorre o array personagens e, se encontrar o nome correspondente, utiliza splice para remover. Imprime uma mensagem de confirmação ou de erro caso o personagem não seja encontrado.
*/
function excluirPersonagem(nome) {
    for (let i = 0; i < personagens.length; i++) { // Percorre o array de personagens
        if (personagens[i].nome === nome) { // Verifica se o nome do personagem corresponde ao nome buscado
            personagens.splice(i, 1) // Remove o personagem do array splice
            console.log(nome + ' O mestre nos traiu! Malvado, ardiloso, falso!.') // Mensagem de confirmação de removeu
            return // Encerra a função depois de remover
        }
    }
    console.log('Ainda há esperanca....Personagem não encontrado.') // Mensagem caso o personagem não seja encontrado
}

/* 
   Função para o usuário criar vários personagens:
   - Objetivo: Permitir que o usuário crie varios personagens em uma única vez
   - Entradas: Solicita ao usuário quantos personagens deseja criar
   - Processo: Utiliza um loop para criar o número de personagens solicitado, chamando a função de criação e a de adicionar
*/
function criarVariosPersonagens() {
    let numPersonagens = Number(readlineSync.question('Quantos personagens deseja criar meu senhor? ')) // Pergunta quantos personagens o usuário deseja criar e converte a resposta para número
    for (let i = 0; i < numPersonagens; i++) { // Executa o loop para criar vários personagens
        let personagem = criarPersonagemComPrompt() // Chama a função para criar um personagem
        adicionarPersonagem(personagem) // Adiciona o personagem ao array de personagens
    }
}

/* 
   Função para interagir com o sistema:
   - Objetivo: Exibir um menu de opções para o usuário e executar a função correspondente a opção escolhida
   - Processo: Utiliza um loop do-while para manter o menu ativo até que o usuário decida sair. chama funções: criar, listar, buscar, excluir personagens ou sair do sistema
  -do: Executa o código que exibe o menu e recebe a opção do usuário
  -while (opcao !== '5'): depois de executar, verifica se a opção é diferente de '5' -Enquanto for diferente de '5', o loop continua, mantendo o menu aberto. Quando o usuário escolhe '5', o loop termina e o programa sai
*/


function menu() {
    let opcao // Declara a variável 'opcao'
    do {
        opcao = readlineSync.question('Meu precioso! Escolha uma opcao:\n1. Criar Personagem\n2. Listar Personagens\n3. Buscar Personagem\n4. Excluir Personagem\n5. Sair\n') // Exibe o menu de opções para o usuário  \n= quebra linha
        
        switch (opcao) { // Verifica a opção escolhida pelo usuário
            case '1':
                criarVariosPersonagens() // Chama a função para criar vários personagens
                break
            case '2':
                listarPersonagens() // Chama a função para listar todos os personagens
                break
            case '3':
                let nomeBusca = readlineSync.question('Digite o nome do personagem que deseja buscar meu senhor: ') // Pergunta o nome do personagem que o usuário quer buscar
                let personagem = buscarPersonagem(nomeBusca) // Busca o personagem pelo nome
                if (personagem) {
                    exibirDetalhes(personagem) // Exibe os detalhes do personagem se ele for encontrado
                } else {
                    console.log('Ainda há esperança...Personagem não encontrado.') // Mensagem se o personagem não for encontrado
                }
                break
            case '4':
                let nomeExclusao = readlineSync.question('Digite o nome do personagem que deseja excluir: ') // Pergunta o nome do personagem que o usuário quer excluir
                excluirPersonagem(nomeExclusao) // Exclui o personagem pelo nome
                break
            case '5':
                console.log('Eu não temo a morte.Saindo do sistema.') // Mensagem de saída do sistema
                break
            default:
                console.log('Opção inválida.') // Mensagem de opção inválida
                break
        }
    } while (opcao !== '5') // Continua exibindo o menu até que o usuário escolha a opção de sair
}

// Iniciar o menu do sistema
menu() // Chama a função 'menu' para iniciar o sistema e exibir o menu para o usuário

nome dos integrantes: Diulie Telles, Vitoria Faller Bier, Talita Naibert
