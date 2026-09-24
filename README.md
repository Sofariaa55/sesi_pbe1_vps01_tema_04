# ⚡ SESI - Controle de Consumo e Desperdício de Energia

## 📌 Sobre o Projeto

O projeto SESI - Sistema de Rastreamento de Consumo e Desperdício de Energia foi desenvolvido para registrar informações sobre o consumo de energia de equipamentos utilizados em diferentes locais.

A API permite realizar operações de cadastro, consulta, alteração e exclusão dos equipamentos, além de possibilitar pesquisas por local e por equipamento.

---

## 🎯 Objetivo

O principal objetivo do projeto é organizar os dados de consumo de energia e facilitar o acompanhamento dos equipamentos.

Com o sistema, é possível:

- Cadastrar equipamentos;
- Consultar os equipamentos registrados;
- Pesquisar equipamentos por local;
- Pesquisar pelo nome do equipamento;
- Alterar informações;
- Excluir registros;
- Acompanhar o consumo em kWh.

---

## 💻 Tecnologias

- JavaScript
- Node.js
- Express
- JSON
- Thunder Client
- Visual Studio Code
- HTML

---

## 📁 Organização do Projeto

```text
sesi_pbe1_vps01_tema_04
│
├── client
│   └── index.html
│
├── prints
│   ├── 01_get_todos.png
│   ├── 02_get_id.png
│   ├── 03_busca_equipamento.png
│   ├── 04_busca_local.png
│   ├── 05_post_cadastro.png
│   ├── 06_put_atualizacao.png
│   └── 07_delete.png
│
├── dados.json
├── server.js
├── package.json
├── .gitignore
└── README.md

| Campo            | Função                                    |
| ---------------- | ----------------------------------------- |
| `id`             | Identifica cada registro                  |
| `local`          | Indica onde o equipamento está localizado |
| `equipamento`    | Nome do equipamento cadastrado            |
| `consumo_kwh`    | Quantidade de energia consumida           |
| `mes_referencia` | Mês referente ao registro                 |
| `status`         | Indica a situação do consumo              |


| Método | Endpoint                                 | Função                       |
| ------ | ---------------------------------------- | ---------------------------- |
| GET    | `/equipamentos`                          | Lista todos os equipamentos  |
| GET    | `/equipamentos/:id`                      | Consulta pelo ID             |
| GET    | `/equipamentos/local/:local`             | Pesquisa pelo local          |
| GET    | `/equipamentos/equipamento/:equipamento` | Pesquisa pelo equipamento    |
| POST   | `/equipamentos`                          | Adiciona um novo equipamento |
| PUT    | `/equipamentos/:id`                      | Modifica um equipamento      |
| DELETE | `/equipamentos/:id`                      | Remove um equipamento        |





🧪 Testes com Thunder Client

Os testes da API foram realizados utilizando o Thunder Client no Visual Studio Code.

Teste 1 - GET Todos os Equipamentos

Retorna todos os equipamentos cadastrados.

GET http://localhost:3000/equipamentos
🧪 Testes da API

Os endpoints foram testados utilizando o Thunder Client no Visual Studio Code.

1. Listagem dos equipamentos
GET http://localhost:3000/equipamentos

2. Consulta por ID
GET http://localhost:3000/equipamentos/2

3. Pesquisa por equipamento
GET http://localhost:3000/equipamentos/equipamento/Computadores

4. Pesquisa por local
GET http://localhost:3000/equipamentos/local/Sala

5. Cadastro de equipamento
POST http://localhost:3000/equipamentos

Exemplo de dados enviados:

{
    "local": "Laboratório 02",
    "equipamento": "Projetor",
    "consumo_kwh": 95.5,
    "mes_referencia": "2026-09",
    "status": "Normal"
}

6. Alteração de equipamento
PUT http://localhost:3000/equipamentos/2

Dados utilizados:

{
    "local": "Sala 05",
    "equipamento": "Computadores",
    "consumo_kwh": 180.5,
    "mes_referencia": "2026-09",
    "status": "Consumo elevado"
}

7. Exclusão de equipamento
DELETE http://localhost:3000/equipamentos/2

🌐 Página HTML

O projeto possui uma página para realizar o cadastro dos equipamentos.

Arquivo utilizado:

client/index.html

Nela é possível preencher os dados do equipamento e enviar as informações para a API.

▶️ Como Rodar o Projeto

Primeiro, abra o terminal na pasta do projeto e instale as dependências:

npm install

Depois execute o servidor:

node server.js

A API ficará disponível em:

http://localhost:3000

Para visualizar o formulário, abra:

client/index.html
⚡ Tema

Sistema de Rastreamento de Consumo e Desperdício de Energia

O projeto busca facilitar o registro e a consulta do consumo energético dos equipamentos, permitindo organizar as informações por local, equipamento, mês e status.
