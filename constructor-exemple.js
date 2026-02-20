// Aqui criamos a "receita" para fazer gatos - EXEMPLO DE CONSTRUCTOR
// class Gato {
//   // O constructor é chamado automaticamente quando fazemos um gato novo
//   constructor(nome, cor) {
//     // 'this' significa "este gato que estou criando agora"
//     // Estou guardando o nome que recebi no parâmetro
//     this.nome = nome;

//     // Estou guardando a cor que recebi no parâmetro
//     this.cor = cor;

//     // Posso definir valores fixos também!
//     this.energia = 100; // Todo gato começa com energia cheia
//   }

//   // Método para o gato miar
//   miar() {
//     console.log(`${this.nome} faz: Miau! 🐱`);
//   }

//   // Método para o gato brincar
//   brincar() {
//     this.energia = this.energia - 10; // Perde 10 de energia
//     console.log(`${this.nome} brincou! Energia agora: ${this.energia}`);
//   }
// }

// // Agora vamos CRIAR gatos usando nossa "receita"!

// // Criando o primeiro gato - o constructor roda aqui!
// let meuGato = new Gato("Mingau", "laranja");

// // Criando outro gato - o constructor roda de novo!
// let outroGato = new Gato("Frajola", "preto e branco");

// // Vamos testar!
// console.log(meuGato.nome);    // Mostra: Mingau
// console.log(meuGato.cor);     // Mostra: laranja
// console.log(meuGato.energia); // Mostra: 100

// meuGato.miar();     // Mostra: Mingau faz: Miau! 🐱
// meuGato.brincar();  // Mostra: Mingau brincou! Energia agora: 90

// console.log(outroGato.nome); // Mostra: Frajola

// MEU CONSTRUCTOR --- feito a mão e errado

class livros {
  constructor(titulo, autor, paginas){
    //Definindo o nome do livro (titulo)
      this.titulo = titulo, // ❌ ERRO: usar ; (ponto e vírgula) ao invés de , (vírgula)
       //Definindo o nome do autor
      this.autor = autor, // ❌ ERRO: usar ; (ponto e vírgula) ao invés de , (vírgula)
       //Definindo o numeros de paginas do livro
      this.paginas = paginas // ✅ CORRETO aqui, mas faltou o ;
      this.paginasLidas = 0 // ✅ CORRETO, mas faltou o ;
  }

  ler(qauntasPaginas) { // ❌ ERRO: digitou "qauntasPaginas" - correto é "quantasPaginas"
    this.paginas = paginasLidas // ❌ ERRO: deveria ser "this.paginasLidas = this.paginasLidas + quantasPaginas"
    console.log(`${qauntasPaginas} já foram adicionadas a suas paginas lidas. Que agora está atualmente em ${this.paginasLidas}`) // ❌ ERRO: "qauntasPaginas" escrito errado de novo
 }

 informações(bookName){ // ❌ ERRO: não precisa do parâmetro bookName - o objeto já sabe quem ele é
   if(bookName === this.titulo){ // ❌ ERRO: não precisa desse if
   console.log( `${this.titulo} é o titulo do livro, ${this.autor} é o autor do livro, ${this.paginas} é o total de paginas de um livro`
  ) // ✅ A lógica do console.log está correta
  }
 }
}


let Moanaa = new livros("um mar de aventuras", "disney", 255) // ✅ CORRETO
let cinderelaa = new livros("A gata borralheira", "disney", 300) // ✅ CORRETO

console.log(livros.ler(56)) // ❌ ERRO GRAVE: está chamando na CLASSE (livros) - deve chamar no OBJETO (Moana.ler(56) ou cinderela.ler(56))




// MEU CONSTRUCTOR --- Corrigido

class livros {
  constructor(titulo, autor, paginas){
    //Definindo o nome do livro (titulo)
      this.titulo = titulo;
       //Definindo o nome do autor
      this.autor = autor;
       //Definindo o numeros de paginas do livro
      this.paginas = paginas;
      this.paginasLidas = 0
  }

  ler(quantasPaginas) {
    this.paginasLidas = this.paginasLidas + quantasPaginas
    console.log(`${quantasPaginas} já foram adicionadas a suas paginas lidas. Que agora está atualmente em ${this.paginasLidas}`)
 }

informacoes() {
  console.log(`Título: ${this.titulo}`);
  console.log(`Autor: ${this.autor}`);
  console.log(`Total de páginas: ${this.paginas}`);
  console.log(`Páginas já lidas: ${this.paginasLidas}`);
}
}


let Moana = new livros("um mar de aventuras", "disney", 255)
let cinderela = new livros("A gata borralheira", "disney", 300)

Moana.ler(56);
cinderela.ler(100);

Moana.informacoes()
