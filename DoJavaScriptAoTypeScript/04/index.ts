// O enunciado do exercício é:

// Criar uma função que recebe um array de strings (nomes de cidades) e retorna um novo array contendo apenas as cidades com até 8 caracteres.

// Um exemplo de array de entrada é:


const citiesEightCharacters = (arrayCities: string[]): string[] => {
    return arrayCities.filter((city: string) => city.length <= 8)
    
}


let exemplo: string[]= ["Salvador", "São Paulo", "Brasília", "Recife", "Rio de Janeiro"]

let maisExemplos: string[]= ["Bahia", "Minas Gerais", "São Paulo", "Brasília", "Parana", "Rio de Janeiro"]

console.log(citiesEightCharacters(exemplo))

console.log(citiesEightCharacters(maisExemplos))


// Declaração da função
function filtroCidades(cidades: string[]): string[] {
    // Utiliza o método filter para retornar as cidades com até 8 caracteres
    return cidades.filter(cidade => cidade.length <= 8);
}

// Exemplo do professor
const cidades = ["Salvador", "São Paulo", "Brasília", "Recife", "Rio de Janeiro"];
const cidadesFiltradas = filtroCidades(cidades);

// Exibindo o resultado no console
console.log(cidadesFiltradas); // Saída esperada: ['Salvador', 'Recife']


//ERROS 
// arrayCities.map((city:string) => city.length > 8 ) -  CONTRUÇÃO DO MAP ERRADA
//O tipo 'void[]' não pode ser atribuído ao tipo 'string[]', O tipo 'void' não pode ser atribuído ao tipo 'string'
  
/// const citiesEightCharacters = (arrayCities: string[]): string[] => {
//     const newArrayCities: string[] = arrayCities.map((city:string) => { -- newArrayCities tava dadno o erro acima
//         if(city.length > 8){
//           return newArrayCities.push(city)
//         }
//      } )
//      return newArrayCities
// }