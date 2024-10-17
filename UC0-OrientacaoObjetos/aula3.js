//******************************** Métodos *********************************** 
/*
ideia principal: sempre age conforme os interesses daquela classe (faça seja relevante para a especificacao da classe, especificar para fazer sempre uma coisa)  SOLID(vamos trabalhar com S apenas)


class carro:
    marca
    modelo
    placa
****métodos:
ligar()
freio()
buzinar()
acelerar()
estaLigado() = boo
        
objeto carro: instanciacao do objeto, pegar a classe e dar vida (comecar a fazer as operacoes) 
    let carro = new carro()
    carro.ligar()
   se carro estaLigado()
    carro.acelerar()




//Exercicio 1: SISTEMA DE GERENCIAMENTO DE ESTACIONAMENTO


class Veiculo
atributos:
   cadastroVeiculo
metodos:
   registrarEntrada()
   registrarSaída()




class EmitirTicket:
   ticketID //criar ID de cada placa
   veiculoID 
metodos:
   emitirTicket()
   validarTicket()





class Cobrança:
   valorHora
   totalCobrado
metodos:
   calcularValor()
   emitirCobrança()




class  RelatorioDetalhado:  
   listaVeiculo
   totalRelatorio
metodos:
   gerarRelatorio()
   exibirRelatorio()



   
class estacionanemto:
    vagasDisponivel
    veiculoID  
    tempoEntrada
    tempoSaida
metodos:
   registrarEntrada() 
   registrarSaida()
   verificarDisp()
   otimizarEspaço()




class ReduzirFila  
    filaAtual
metodos:
   monitorarFila()
   reduzirFila()




class ExpCliente
  feedbackCliente
metodos:
   coletarFeedback()
   aplicarMelhoria()

 
   

class MonitoramentoTempoReal:
   statusVeiculo

metodos:
   ativarMonit()
   exibirMonit()





class Seguranca:
   sistemaSeguranca
metodos:
   garantirSeguranca()
   monitorarIncidentes()








//******************************** Método Construtor *********************************** 
/*
let cachorro = new cachorro() //nao pode passar metodo vazio para o construtor, '()', precisa dizer que é string e explicar ela se é vazia

class cachorro:
cor :
pelo:
raca:

Exemplo certo:

class cachorro:
cor : string = ''
pelo: string = ''
raca: string = ''

latido -> string
return 'au-au'
andar()-> void;
constuctor(raca.str){
 this.raca=raca; //vai ser chamado 'essa classe raca'

}

errado : let cachorro = new cachorrro() // precisa passar um parametro
certo  : let cachorro= new cachorro('Boxer') // agora tem um parametro e direcionado para raca


cachorro.constructor() //nao usar, nao funciona











*/

