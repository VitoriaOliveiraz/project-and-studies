# Mangas API

## Sobre

Essa API foi construída pra gerenciar uma coleção de mangás. Com ela da pra buscar, cadastrar, atualizar e remover mangás da lista, além de filtrar por autor. Usei o Insomnia pra testar todas as rotas enquanto eu desenvolvia.

## Endpoints

| Método | Rota                       | Descrição                                |
| ------ | -------------------------- | ---------------------------------------- |
| GET    | `/mangas`                  | Busca todos os mangás cadastrados        |
| GET    | `/busca/mangas/:id`        | Busca um mangá pelo id                   |
| POST   | `/mangas`                  | Cadastra um novo mangá                   |
| PATCH  | `/mangas/:id`              | Atualiza um campo especifico de um mangá |
| PUT    | `/mangas/:id`              | Atualiza todos os dados de um mangá      |
| DELETE | `/mangas/:id`              | Remove um mangá da lista                 |
| GET    | `/manga/autor/:autor`      | Busca os mangás de um autor especifico   |
| PUT    | `/atualizandoAutor/:autor` | Atualiza o nome de um autor              |

## Conceitos praticados

- Diferença entre PATCH e PUT na atualização de dados
- Busca e filtragem por parâmetro de rota
- Manipulação de listas com múltiplos endpoints
- Status codes por tipo de operação

## Como rodar

```bash
cd apis
npm install
node 02-mangas-api/index.js
```
