# Tasks API

## Sobre

Essa foi em tese minha primeira api. Nela o desafio me proposto foi gerenciar uma lista de tarefas simples. Sempre retornando as modificações ou solicitações da rota usando Insomnia (pra bater nas rotas).

## Endpoints

| Método | Rota           | Descrição                                                                  |
| ------ | -------------- | -------------------------------------------------------------------------- |
| GET    | `/tarefas`     | [Busca todas as tarefas]                                                   |
| POST   | `/tarefas`     | [Inserindo uma nova tarefa, verificando status, inserindo uma tarefa nova] |
| PUT    | `/tarefas/:id` | [Atualiza uma tarefa em especifico]                                        |
| DELETE | `/tarefas/:id` | [Apaga uma tarefa de vez]                                                  |

## Conceitos praticados

- [validação de campos obrigatórios]
- [status codes corretos por tipo de resposta]
- [Funcionamento de rotas e manipulação de dados em geral]

## Como rodar

```bash
cd apis
npm install
node 01-tasks-api/index.js
```
