/*----------
Trabalho Avaliativo: Validação de Algoritmos
---------------------------------------------------------

1. Funcionalidade do Algoritmo
---------------------------------------------------------
Algoritmo Selecionado: Verificar se um número é par ou ímpar.

Descrição: O algoritmo verifica se um número inteiro, fornecido pelo usuário, é par ou ímpar.

Entrada: Um número inteiro fornecido pelo usuário via prompt.

Saída Esperada: “Par" se o número for par, ou "Ímpar" se o número for ímpar. O resultado é exibido no console com a mensagem: 
O número [número] é [Par/Ímpar]

2. Conjunto de Testes
---------------------------------------------------------
| Caso de Teste | Entrada (Número) | Saída Esperada           |
|---------------|------------------|--------------------------|
| 1             | 5                | O número 5 é Ímpar.      |
| 2             | 10               | O número 10 é Par.       |
| 3             | 7                | O número 7 é Ímpar.      |
| 4             | -8               | O número -8 é Par.       |
| 5             | -3               | O número -3 é Ímpar.     |

3. Implementação do Algoritmo
---------------------------------------------------------
Aqui está a implementação do algoritmo em JavaScript, utilizando a função 
prompt() para solicitar a entrada do usuário.
*/

function verificarParImpar(numero) {
    let resultado;
    if (numero % 2 === 0) {
        resultado = "Par";
    } else {
        resultado = "Ímpar";
    }
    console.log(O número ${numero} é ${resultado}.);
}

// Solicita ao usuário que insira um número
let numeroUsuario = prompt("Digite um número para verificar se é par ou ímpar:")
verificarParImpar(numeroUsuario)

/*
4. Documentação dos Resultados
---------------------------------------------------------
| Caso de Teste | Entrada (Número) | Saída Esperada           | Saída Real            | Resultado |
|---------------|------------------|--------------------------|-----------------------|-----------|
| 1             | 5                | O número 5 é Ímpar.      | O número 5 é Ímpar.   | Passou    |
| 2             | 10               | O número 10 é Par.       | O número 10 é Par.    | Passou    |
| 3             | 7                | O número 7 é Ímpar.      | O número 7 é Ímpar.   | Passou    |
| 4             | -8               | O número -8 é Par.       | O número -8 é Par.    | Passou    |
| 5             | -3               | O número -3 é Ímpar.     | O número -3 é Ímpar.  | Passou    |

5. Análise dos Resultados
---------------------------------------------------------
Todos os testes passaram, o algoritmo funciona corretamente. O algoritmo determina 
corretamente se o número é par ou ímpar usando o operador de módulo (%), que 
verifica se o número é divisível por 2.

Não houve falhas durante os testes, portanto, não foi necessário realizar correções 
no algoritmo. A implementação atende às expectativas e é funcional.

6. Conclusão
---------------------------------------------------------
 O algoritmo responde corretamente com a classificação "Par" ou "Ímpar". Todos os casos de testes está de maneira adequada.
---------------------------------------------------------
*/
