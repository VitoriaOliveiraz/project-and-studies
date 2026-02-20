// Enunciado do Exercício 03
// Objetivo: Criar uma função que recebe um array de números e retorna:

// "Array válido" se todos os números forem pares.
// "Array inválido" se pelo menos um número não for par.
// Exemplo de entrada:

// const numeros = [0, 122, 4, 6, 7, 8, 44];
// // Resultado esperado: "Array inválido" (pois o número 7 é ímpar)

// Requisitos: O código deve ser escrito em TypeScript, com tipagem adequada para todas as variáveis, parâmetros e retorno da função.

const arrayEven = (arrayToNumbers: number[]): string => {
  let existOddNumbers = 0
  for (const number of arrayToNumbers) {
    if ((number % 2 == 0) == false) {
      existOddNumbers += 1
    }
  }
  if (existOddNumbers > 0) {
    return `Array inválido, pois contém ${existOddNumbers} impares`
  }
  return "Array valido, pois todos os numeros são pares"
}

console.log(arrayEven([0, 122, 4, 6, 7, 8, 44]))
console.log(arrayEven([0, 122, 4, 6, 2, 8, 44]))

//Simplificado utilizando o metodo SOME
const arrayEvens = (numbers: number[]): string => {
  const hasOdd = numbers.some(number => number % 2 !== 0)
  return hasOdd ? "Array inválido" : "Array válido"
}

console.log(arrayEvens([0, 122, 4, 6, 7, 8, 44])) // Array inválido
console.log(arrayEvens([0, 122, 4, 6, 2, 8, 44])) // Array válido



// O lado esquerdo de uma operação aritmética deve ser do tipo 'any', 'number', 'bigint' ou um tipo enumerado - Erro
// Não é possível atribuir a 'existOddNumbers' porque é uma constante
// A função não tem a instrução return final e o tipo de retorno não inclui 'undefined'
// O Problema: Os returns estão dentro do for - erro de desantenção
