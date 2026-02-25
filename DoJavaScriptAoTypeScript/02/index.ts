// No exercício 2, você deve implementar uma função em TypeScript chamada buscarLivro. Aqui estão os principais detalhes que foram passados no vídeo:

// Objetivo: A função deve localizar a posição de um livro em uma estante representada por um array de strings.

// Parâmetros:

// A função recebe duas entradas:
// livros: um array de strings que representa os títulos dos livros.
// nomeLivro: uma string que representa o título do livro a ser pesquisado.
// Retorno da Função:

// A função deve retornar uma string:
// Se o livro for encontrado, a mensagem deve ser: "O livro está na posição X", onde X é a posição começando em 1.
// Se o livro não for encontrado, deve retornar: "Livro não encontrado".
// Considerações:

// A indexação deve começar em 1, ao contrário do padrão do JavaScript, que começa em 0.
// Use o método indexOf para determinar a posição do livro no array

const buscarLivro = (livros: string[], nomeDoLivro: string): string => {
  const posiçãoDoLivro: number = livros.indexOf(nomeDoLivro) + 1

  if (posiçãoDoLivro) {
    return `O livro solucionado atualmente está na posição ${posiçãoDoLivro}`
  }
  return "Livro não encontrado na estante"
}
console.log(buscarLivro(["Guerra e Paz", "A Montanha Mágica", "Cem Anos de Solidão", "Dom Quixote", "A Divina Comédia"], "Guerra e Paz"))

console.log(buscarLivro(["Guerra e Paz", "A Montanha Mágica", "Cem Anos de Solidão", "Dom Quixote", "A Divina Comédia"], "Pão com ovo"))
