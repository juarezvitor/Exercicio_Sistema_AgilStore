# AgilStore

Sistema de gerenciamento de produtos desenvolvido em Node.js.  
Permite adicionar, listar, buscar, atualizar e excluir produtos com persistência em JSON.

## 📌 Tecnologias

- Node.js
- JavaScript (ES6)
- readline-sync (para interações no terminal)
- File System (fs) para persistência em JSON

---

## 🚀 Funcionalidades

O sistema oferece as seguintes operações:

1. **Adicionar Produto**

   - Inserir nome, categoria, quantidade e preço
   - ID gerado automaticamente
   - Persistência imediata no arquivo JSON

2. **Listar Produtos**

   - Exibe produtos em formato de tabela (`console.table`)
   - Filtragem por categoria
   - Ordenação por nome, quantidade ou preço

3. **Buscar Produto**

   - Buscar por ID ou parte do nome
   - Mostra informações detalhadas
   - Mensagem caso não encontre nenhum produto

4. **Atualizar Produto**

   - Localiza produto por ID
   - Permite atualizar qualquer campo
   - Mantém os dados antigos se o usuário não alterar
   - Persistência imediata

5. **Excluir Produto**

   - Localiza produto por ID
   - Confirmação de exclusão
   - Remove do inventário e atualiza JSON

6. **Persistência de Dados**
   - Todos os produtos são salvos em `products.json`
   - Garantia de que os dados não se perdem ao fechar o sistema

---

## 💻 Instalação e Execução

### Pré-requisitos

- Node.js instalado ([Download](https://nodejs.org/))
- Terminal / CMD

### Passo a passo

1. Clone o repositório:

```bash
git clone https://github.com/seuusuario/agilstore.git
## Como rodar o projeto

1. Clone o repositório:

git clone https://github.com/juarezvitor/Exercicio_Sistema_AgilStore.git

2. Entre na pasta do projeto:

3. Instale as dependências:

4. Rode o sistema:
```

agilstore/
│
├── index.js # Arquivo principal com menu de opções
├── services/
│ ├── productService.js # Funções CRUD de produtos
│ └── fileService.js # Funções de leitura e escrita em JSON
├── products.json # Arquivo de persistência
└── README.md # Documentação do projeto
