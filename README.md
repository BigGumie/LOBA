
# Tarefa 1

Este projeto é uma API de autenticação e gerenciamento de usuários desenvolvida em Node.js utilizando o framework Express. A API permite que os usuários se registrem, façam login e recebam um token JWT para autenticação. Além disso, a API envia um email de boas-vindas ao usuário após o registro.


## Funcionalidades
1. **Registro de Usuário**

- Endpoint: `POST /auth/register`
- O usuário pode se registrar fornecendo um nome, email e senha.
- A senha é criptografada usando bcrypt antes de ser armazenada no banco de dados.
- Um token JWT é gerado e enviado ao usuário por email como parte da mensagem de boas-vindas.

2. **Login de Usuário:**
- Endpoint: `POST /auth/login`
- O usuário pode fazer login fornecendo email e senha.
- A senha fornecida é comparada com a senha criptografada armazenada no banco de dados.
- Se as credenciais estiverem corretas, o token JWT gerado durante o registro é retornado ao usuário.

## Tecnologias Usadas

- **Node.js**: Plataforma de desenvolvimento.
- **Express**: Framework web para Node.js.
- **Sequelize**: ORM para interagir com o banco de dados.
- **bcryptjs**: Biblioteca para criptografia de senhas.
- **jsonwebtoken**: Geração e verificação de tokens JWT.
- **nodemailer**: Biblioteca para envio de emails.
- **PostgreSQL**: Banco de dados relacional.
- **Swagger**: Decumentação da API
- **JOI**: Validação de dados

## Estrutura do Projeto

- **controllers/authController.js**: Contém as funções de registro e login de usuários.
- **models/usuario.js**: Define o modelo de dados do usuário.
- **services/mailService.js**: Configura o serviço de email usando Nodemailer.
- **routes/authRoutes.js**: Define as rotas de autenticação.
- **schemas**: Define esquemas de validação.
- **server.js**: Configura o servidor Express e define as rotas principais.
- **swagger.json**: Configura a decumentação da API

## Exemplos de uso

**Registro de Usuário**

- **Endpoint:** `POST /auth/register`
- **Body:**

```bash
{
  "nome": "Exemplo",
  "email": "exemplo@exemplo.com",
  "senha": "senha123"
}
```

**Login de Usuário**

- **Endpoint:** `POST /auth/login`
- **Body:**

```bash
{
  "email": "exemplo@exemplo.com",
  "senha": "senha123"
}
```


## Recursos

 - [RESTful API with Express, Sequelize, and JWT Authentication](https://medium.com/@fanbubu0/building-a-restful-api-with-express-sequelize-and-jwt-authentication-2bd8c4b78599)
 - [Login Implementation with JWT in Node.js using Postgres and Sequelize](https://medium.com/@kizito917/sign-up-and-login-implementation-with-jwt-in-node-js-using-postgres-and-sequelize-7093491b080f)
 - [Node.js Authentication with PostgreSQL, Sequelize, and Express.js](https://medium.com/@rachealkuranchie/node-js-authentication-with-postgresql-sequelize-and-express-js-20ae773da4c9)
  - [JOI](https://joi.dev/api/?v=17.13.3)
  - [Swagger](https://swagger.io)



## Usar Localmente

Clone the project

```bash
  git clone https://github.com/BigGumie/LOBA.git
```

Go to the project directory

```bash
  cd Tarefa-1-API
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```

