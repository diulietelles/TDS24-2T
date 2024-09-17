//************************* Gerenciador de Personagens de LotR ****************************//


//Instruções do trabalho:
/*Criação de Personagens:
Utilize um array para armazenar os personagens.
Cada personagem deve ser representado por um objeto com as seguintes propriedades:
nome, classe, nivel, hp (pontos de vida), habilidades, e historicoAcoes.
Ações dos Personagens:
Cada personagem pode realizar ações como atacar, defender e usar habilidades especiais.
As ações realizadas devem ser registradas no historicoAcoes.
Histórico de Ações:
O histórico de ações será armazenado no objeto do personagem. Sempre que o
personagem realizar uma ação, o histórico deverá ser atualizado.
Busca e Ordenação de Personagens:
A função de busca deve percorrer o array de personagens e encontrar o personagem
correspondente.
A listagem de personagens deve ser feita em ordem alfabética. */






// Array para armazenar os personagens:
let personagens = []

// Função para Cadastro de Personagens:
function cadastrarPersonagem(nome, classe, nivel, hp, habilidades) {
  // Adiciona um novo personagem ao array
  personagens.push({ nome, classe, nivel, hp, habilidades, historicoAcoes: [] })


}

// Função para Ações dos Personagens:
function realizarAcao(nome, acao) {
  // Busca o personagem pelo nome
  let personagem = buscarPersonagem(nome)
  // Se o personagem for encontrado, adiciona a ação ao histórico personagem:
  personagem.historicoAcoes.push(acao) 
  console.log('Personagem encontrado.')
}

