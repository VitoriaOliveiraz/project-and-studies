# Cars API

## Sobre

API pra gerenciar uma lista de carros. Da pra listar todos, buscar um especifico, adicionar, atualizar e deletar. Foi um exercício focado em consolidar as operações básicas de um CRUD completo.

## Endpoints

| Método | Rota                | Descrição                                |
| ------ | ------------------- | ---------------------------------------- |
| GET    | `/listarCarros`     | Busca todos os carros cadastrados        |
| GET    | `/listarCarros/:id` | Busca um carro pelo id                   |
| POST   | `/adicionarCarro`   | Cadastra um novo carro                   |
| PATCH  | `/atualizarCarro`   | Atualiza um campo especifico de um carro |
| PUT    | `/atualizarCarro`   | Atualiza todos os dados de um carro      |
| DELETE | `/deletarCarro/:id` | Remove um carro da lista                 |

## Conceitos praticados

- CRUD completo com todos os métodos HTTP
- Organização de rotas por responsabilidade
- Manipulação de dados em memória

## Como rodar

```bash
cd apis
npm install
node 03-cars-api/index.js
```
