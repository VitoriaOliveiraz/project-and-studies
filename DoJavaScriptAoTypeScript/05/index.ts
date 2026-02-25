// O enunciado do exercício 5 é o seguinte:

// Criar uma função chamada filtroNumerosPares que recebe um array de números inteiros como argumento e retorna um novo array contendo apenas os números pares deste array original.

const filtroNumerosPares =(arrayNumerosPares: number[]): number[] => {
    return arrayNumerosPares.filter(number => number % 2 == 0)

}
const exemploOne = [1, 98, -76, 0, 12, 19, 5, 60, 44]

console.log(filtroNumerosPares(exemploOne))

//Fiz facinho hehehehheheh

//COMO O PROFESSOR FEZ

const filtroNumerosParesProfe = (numeros: number[]): number[] => {
  const numerosPares = numeros.filter(numero => numero % 2 === 0);
  return numerosPares;
};

console.log(filtroNumerosParesProfe(exemploOne))


//ERROS

//A variável 'filtroNumerosPares' implicitamente tem um tipo 'any'. 
//const filtroNumerosPares(arrayNumerosPares: number[]): number[] => {
//     return arrayNumerosPares.filter(number => number % 2 == 0)
// }