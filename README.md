🚀 Projeto PBE1 - VPS01 (Tema 2026)Repositório criado para a entrega da VPS01 (Validação Prática de Cursos Tecnológicos) da disciplina de Programação Backend I (PBE1) - SESI / SENAI.📌 Sobre o ProjetoO objetivo deste projeto é construir um serviço web contendo uma API backend em Node.js com operações CRUD completas (Create, Read, Update, Delete) utilizando armazenamento em arquivo JSON (dados.json), além de uma interface Web simples integrada no frontend.📂 Estrutura do RepositórioCom base na arquitetura do projeto:.
├── client/
│   └── indux.html     # Frontend / Interface do usuário
├── prints/            # Evidências e testes das rotas
│   ├── create.png     # Teste de criação (POST)
│   ├── delete.png     # Teste de deleção (DELETE)
│   ├── envio.png      # Teste de requisição/envio
│   ├── find.png       # Teste de busca específica por ID
│   ├── read.png       # Teste de listagem geral (GET)
│   ├── update.png     # Teste de atualização (PUT)
│   └── web.png        # Demonstração da aplicação rodando na web
├── .gitignore         # Arquivos ignorados pelo Git
├── README.md          # Documentação do projeto
├── dados.json         # Arquivo de persistência de dados
├── package.json       # Dependências e scripts do Node.js
└── server.js          # Arquivo principal do servidor Backend
⚙️ Como Executar o Projeto1. Pré-requisitosCertifique-se de ter instalado:Node.js (versão 18 ou superior)2. Passos para execuçãoClone o repositório:git clone https://github.com/Tobiasbueno18/sesi_pbe1_vps01_tema_2026.git
Acesse a pasta do projeto:cd sesi_pbe1_vps01_tema_2026
Instale as dependências:npm install
Inicie o servidor:npm start
(ou node server.js / npx nodemon server.js dependendo do script configurado)Acesse no navegador:Interface Web: http://localhost:3000 (servindo o client/indux.html)🛣️ Rotas da API (Endpoints)OperaçãoMétodoEndpointDescriçãoCreatePOST/ ou /apiCria um novo registro no dados.jsonRead AllGET/ ou /apiListagem completa dos registrosFindGET/:idBusca um registro pelo IDUpdatePUT/:idAtualiza as informações de um registroDeleteDELETE/:idRemove um registro pelo ID📸 Evidências dos Testes (Prints)🌐 Interface Web (web.png)➕ Criar Registro (create.png)🔍 Buscar Registros (read.png e find.png)Listagem GeralBusca por ID✏️ Atualizar Registro (update.png)🗑️ Deletar Registro (delete.png)✒️ AutorDesenvolvido para a avaliação VPS01 da disciplina Programação Backend I (PBE1) - SESI / SENAI 2026.
