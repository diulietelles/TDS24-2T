class Aluno{
    nome: string = ''
    sobrenome: string = ''
    peso: number = 0
    altura:number

    calcularIMC(): number{
        return this.peso / this.altura * this.altura
    }
}

let aluno = new Aluno()
aluno.nome = 'João'
aluno.sobrenome = 'da Cunha'
aluno.peso = 90
aluno.altura = 188
console.log(aluno.calcularIMC())

class Academia{
    alunos: Array<Aluno> = []

    adicionarAluno(aluno: Aluno){ //recebe um objeto aluno é um nome de uma variavel apenas, '(aluno:'
        this.alunos.push(aluno)
    }
}


let academia = new Academia()
let aluno_1 = new Aluno()
aluno.nome_1 = 'Pedro'
aluno.sobrenome_1 = 'Das Neves'
academia.adicionarAluno(aluno)
console.log(academia.alunos) // vai retornar os alunos da academia

let academia = new Academia()
let aluno_2 = new Aluno()
aluno.nome_2 = 'João'
aluno.sobrenome_2 = 'Das Canhas'

academia.adicionarAluno(aluno)
academia.adicionarAluno(aluno_1)
console.log(academia.alunos)