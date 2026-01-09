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
## 💡 Design da Solução e Decisões Tomadas

1. **Modularidade do Código**  
   - Separei as funcionalidades em arquivos: `productService.js` (CRUD) e `fileService.js` (persistência).  
   - Isso facilita manutenção, testes e futuras melhorias, evitando arquivos grandes e confusos.

2. **Persistência via JSON**  
   - Usei `fs.readFileSync` e `fs.writeFileSync` para ler e salvar produtos.  
   - A decisão de usar JSON veio da simplicidade: é legível, fácil de manter e não exige banco de dados externo.

3. **Referência de Objetos**  
   - Ao atualizar produtos, usei a referência do objeto dentro do array para modificar diretamente os campos, evitando a necessidade de recriar o array.

4. **Interação via Terminal**  
   - readline-sync permite interações simples e intuitivas, sem a complexidade de interfaces gráficas.  
   - Mantive o menu claro, com opções numeradas e mensagens de feedback para o usuário.

5. **Validações Básicas**  
   - Checagem de existência de IDs antes de atualizar ou excluir.  
   - Confirmação de exclusão para prevenir perda acidental de dados.

6. **Filtros e Ordenações**  
   - Listagem permite filtragem por categoria e ordenação por nome, quantidade ou preço.  
   - Isso torna o sistema mais útil para cenários reais de estoque.

7. **Segurança contra JSON inválido**  
   - Se `products.json` estiver vazio ou corrompido, o sistema inicia com array vazio, evitando erros de execução.
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

