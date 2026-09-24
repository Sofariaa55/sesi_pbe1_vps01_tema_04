🚀 Projeto PBE1 - VPS01 (Tema 2026)

Repositório criado para a entrega da VPS01 (Validação Prática de Cursos Tecnológicos) da disciplina de Programação Backend I (PBE1) — SESI / SENAI.

📌 Sobre o Projeto

O projeto consiste na criação de um servidor backend desenvolvido em Node.js com suporte a operações CRUD (Create, Read, Update, Delete). A persistência dos dados é realizada em um arquivo dados.json local, e a aplicação conta com uma interface Web simples servida na pasta client.

📂 Estrutura de Arquivos
├── client/
│   └── indux.html       # Interface web (Frontend)
├── prints/              # Evidências de funcionamento
│   ├── create.png       # Teste de criação de registro (POST)
│   ├── delete.png       # Teste de exclusão de registro (DELETE)
│   ├── envio.png        # Teste de envio de requisição
│   ├── find.png         # Teste de busca por ID (GET :id)
│   ├── read.png         # Teste de listagem geral (GET)
│   ├── update.png       # Teste de atualização de dados (PUT)
│   └── web.png          # Visualização da aplicação no navegador
├── .gitignore           # Arquivos ignorados pelo Versionamento Git
├── README.md            # Documentação do repositório
├── dados.json           # Banco de dados em formato JSON
├── package.json         # Dependências e scripts do projeto
└── server.js            # Servidor principal Node.js
⚙️ Como Executar o Projeto

Prerequisitos

Certifique-se de ter o Node.js (v18 ou superior) e o Git instalados na sua máquina.

Passo a Passo

Clonar este repositório:

git clone (https://github.com/Sofariaa55/sesi_pbe1_vps01_tema_04)


Acessar o diretório do projeto:

cd sesi_pbe1_vps01_tema_2026
nstalar as dependências do Node.js:

npm install


Iniciar o servidor:

npm start


(Caso não esteja configurado no package.json, utilize node server.js ou npx nodemon server.js)

Acessar no navegador:

Interface Cliente: http://localhost:3000
🛣️ Rotas da API (Endpoints)

Método

Endpoint

Descrição

GET

/ ou /api

Retorna todos os registros salvos em dados.json

GET

/:id ou /api/:id

Retorna as informações de um registro específico pelo ID

POST

/ ou /api

Cadastra um novo registro

PUT

/:id ou /api/:id

Atualiza os dados de um registro existente pelo ID

DELETE

/:id ou /api/:id

Remove um registro específico pelo ID
📸 Evidências dos Testes (Prints)

🌐 Interface Cliente Web

➕ Criar Registro (Create)

🔍 Listagem e Busca de Registros (Read & Find)

Listagem Geral (Read)

Busca por ID (Find)





✏️ Atualização de Registro (Update)

🗑️ Remoção de Registro (Delete)

📨 Envio de Dados

✒️ Autor

Projeto desenvolvido por Sofia Faria para a VPS01 da disciplina de Programação Backend I (PBE1) — SESI / SENAI 2026.
