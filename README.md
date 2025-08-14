# Desafio: Sua Primeira API com Node.js

Este projeto é o resultado do desafio "Sua Primeira API com Node.js" proposto pela [Rocketseat](https://www.rocketseat.com.br/). O objetivo é construir uma API RESTful simples, aplicando conceitos fundamentais de desenvolvimento backend com Node.js e as tecnologias mais modernas do ecossistema.

## ✨ Tecnologias

Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Fastify**: Framework web para Node.js, focado em performance e baixo overhead.
- **Drizzle ORM**: ORM (Object-Relational Mapper) "headless" e type-safe para TypeScript.
- **Zod**: Biblioteca para validação de esquemas com inferência de tipos estáticos.

## 🚀 Como Executar

Siga os passos abaixo para rodar o projeto em seu ambiente local.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
- [Git](https://git-scm.com)
- [Node.js](https://nodejs.org/en/)
- Um gerenciador de pacotes, como [NPM](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)

### 1. Clonando o repositório

```bash
git clone <URL_DO_SEU_REPOSITORIO>
cd DesafioSuaPrimeiraAPINode.js
```

### 2. Instalando as dependências

Execute o comando abaixo para instalar todas as dependências do projeto:

```bash
npm install
```

### 3. Configurando o Ambiente

1.  Crie uma cópia do arquivo de exemplo de variáveis de ambiente:
    ```bash
    cp .env.example .env
    ```
2.  Abra o arquivo `.env` e preencha as variáveis com as suas configurações de banco de dados (ex: PostgreSQL, SQLite).

    ```env
    DATABASE_URL="sua_string_de_conexao_com_o_banco"
    ```

### 4. Rodando as Migrations

Para criar as tabelas no banco de dados com base nos esquemas definidos, execute o comando de migration:

```bash
npm run db:migrate
```

### 5. Iniciando o Servidor

Com tudo configurado, inicie o servidor de desenvolvimento:

```bash
npm run dev
```

O servidor estará disponível em `http://localhost:3333` (ou na porta que você configurou no arquivo `.env`).

## 🌐 Endpoints da API

Abaixo estão os endpoints disponíveis na aplicação. Sinta-se à vontade para testá-los com uma ferramenta como o Insomnia, Postman ou a documentação do Swagger UI em `http://localhost:3333/docs`.

| Método HTTP | Rota           | Descrição                              | Corpo da Requisição (Exemplo)         |
| :---------- | :------------- | :------------------------------------- | :------------------------------------ |
| `POST`      | `/courses`     | Cria um novo curso.                    | `{ "title": "Curso de Node.js" }`     |
| `GET`       | `/courses`     | Retorna uma lista de todos os cursos.  | (vazio)                               |
| `GET`       | `/courses/:id` | Retorna os detalhes de um curso específico. | (vazio)                               |

---

## 🏗️ Arquitetura e Fluxo de Dados

O diagrama abaixo ilustra o fluxo principal de uma requisição na API, desde a chegada no servidor até a resposta ao cliente.

```mermaid
graph TD
    A[Cliente <br/>(Browser/Insomnia)] -->|1. Requisição HTTP <br/> (ex: POST /courses)| B(Servidor Fastify)
    B -->|2. Roteamento| C{Rota Específica}
    C -->|3. Validação do Body/Params <br/> com Zod| D[Lógica do Handler]
    D -->|4. Executa a Query <br/> com Drizzle ORM| E[(Banco de Dados)]
    E -->|5. Retorna os dados| D
    D -->|6. Envia a Resposta| B
    B -->|7. Resposta HTTP <br/> (ex: 201 Created)| A
```
---

Feito com ❤️ por Seu Nome.