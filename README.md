# Projeto Driven n° 18: Freela (refatoração)

  O atual projeto possui como proposta a elaboração de uma API Restful, com banco de dados PostGres, capaz de gerenciar as requisições de uma aplicação de redes sociais. Ele foi desenvolvido com intuíto acadêmico para a formação Full Stack pela Driven Education. O projeto tinha uma proposta livre, o que permitia a escolha das rotas e entidades. Originalmente foi feito utilizando as tecnologias Mongo + Node.Js, porém foi refatorada para utiliza TypeScript e o banco PostGreSQL.
  
  Se quiser experimentar as funcionalidades sem baixar localmente o código pode utilizar o link abaixo para acessar o deploy da API: 

  [🚀 Link do Deploy](https://deploy-freela.onrender.com)


## 📖 Índice
1. Visão Geral
2. Tecnologias
3. Rotas
4. Como instalar ?
5. Como testar ?

## 📋 Visão Geral 
  O projeto está dividido em três camadas principais: A camada de autorização, a camada de rotas públicas e a camada de rotas autenticadas. O usuario tem a opção de acessar alguns funcionalidades sem autenticação, como acessar a home page e ver os pokemons disponíveis. A autenticação permite que o usuário possa cadastrar e gerenciar seus próprios pokemons/modelos.

## 🛠️ Tecnologias
<table>
  <tr>
    <td align="center">
      <a href="https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" width="100px;" alt="Ícone TypeScript"/><br>
        <sub>
          <b>TypeScript</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://nodejs.org/en/about">
        <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--gjboKZlh--/c_imagga_scale,f_auto,fl_progressive,h_1080,q_auto,w_1080/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/1crd9guwakabciqtt6e3.png" width="100px;" alt="Foto do Iuri Silva no GitHub"/><br>
        <sub>
          <b>Node.js + Express</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.prisma.io/docs/getting-started">
        <img src="https://avatars.githubusercontent.com/u/17219288?s=200&v=4" width="100px;" alt="Ícone prisma"/><br>
        <sub>
          <b>Prisma ORM</b>
        </sub>
      </a>
    </td>
    <td align="center">
      <a href="https://www.postgresql.org/about/">
        <img src="https://cdn-icons-png.flaticon.com/512/5968/5968342.png" width="100px;" alt="Ícone PostGres"/><br>
        <sub>
          <b>Postgres SQL</b>
        </sub>
      </a>
    </td>
        <td align="center">
      <a href="https://jestjs.io/pt-BR/help">
        <img src="https://viget.imgix.net/jest.png?auto=format%2Ccompress&crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&ixlib=php-3.3.1&q=90&s=a6c20876868af5a7f83241353efc2495" width="100px;" alt="Ícone Jest"/><br>
        <sub>
          <b>Jest</b>
        </sub>
      </a>
    </td>
  </tr>
</table>
   
## 🚏 Rotas

## Rotas de autenticação

### <strong>GET /health:</strong> 
Rota de autenticação para checar se o sistema está no ar e funcionando corretamente. 
<details>
<summary> <strong>Resposta esperada:</strong>  </summary>
<strong>HTTP Status:</strong> 200 (OK). </br>
<strong>Texto:</strong> "I'm OK!".

</details>

### <strong>POST /registro:</strong> 
Rota criada para receber um usuario e cadastrar ele.
<details>
<summary> <strong>Corpo da requisição:</strong>  </summary>

  ```json
{
    "nome":"",
    "email": "",
    "foto": "",
    "CPF": "12345678901",
    "phone": "12345678901",
    "senha": ""
}
```
</details>

<details>
<summary> <strong>Resposta esperada:</strong>  </summary>
<strong>HTTP Status:</strong> 201 (CREATED). </br>
<strong>Texto:</strong>:
  
  ```json
{
    "id": "",
    "nome":"",
    "email": "",
    "foto": "",
    "CPF": "12345678901",
    "phone": "12345678901",
}
```
</details>

  ### <strong>POST /login:</strong> 
Rota criada para logar com algum usuario.
<details>
<summary> <strong>Corpo da requisição:</strong>  </summary>

  ```json
{
    "email": "",,
    "senha": ""
}
```
</details>

<details>
<summary> <strong>Resposta esperada:</strong>  </summary>
<strong>HTTP Status:</strong> 200 (OK). </br>
<strong>Texto:</strong>:
  
  ```json
{
    "id": "",
    "userId": "",
    "token": "",
}
```
</details>

  ### <strong>POST /logout:</strong> 
Rota autenticada criada para deslogar com algum usuario, não precisa enviar corpo de requisição mas precisa do token de autorização do usuário no header da requisição.
<details>
<summary> <strong>Header:</strong>  </summary>

  ```javascript
{
    "Authorization": `Bearer ${token}`
}
```
</details>

<details>
<summary> <strong>Resposta esperada:</strong>  </summary>
<strong>HTTP Status:</strong> 204 (No Content). </br>
</details>

## Rotas sem autenticação

### <strong>GET /home:</strong> 
Rota criada para retornar os modelos mais recentes disponíveis no banco de dados.

<details>
<summary> <strong>Resposta esperada:</strong>  </summary>
<strong>HTTP Status:</strong> 200 (OK). </br>
<strong>Texto:</strong>:
  
  ```javascript
[{
    "id": ,
    "nome": ,
    "descricao": ,
    "diaria": ,
    "especie": ,
    "foto": ,
    "comentarioFoto": ,
    "disponivel": ,
    "userId": ,
    "user": {
      "id": "",
      "nome":"",
      "email": "",
      "foto": "",
      "CPF": "",
      "phone": "",
    }
}]
```
</details>

### <strong>GET /pokemon/:id :</strong> 
Rota criada para retornar as informações de um pokemon/modelo específico, na rota deve existir o id correspondente do modelo procurado.

<details>
<summary> <strong>Resposta esperada:</strong>  </summary>
<strong>HTTP Status:</strong> 200 (OK). </br>
<strong>Texto:</strong>:
  
  ```javascript
{
    "id": ,
    "nome": ,
    "descricao": ,
    "diaria": ,
    "especie": ,
    "foto": ,
    "comentarioFoto": ,
    "disponivel": ,
    "userId": ,
    "user": {
      "id": "",
      "nome":"",
      "email": "",
      "foto": "",
      "CPF": "",
      "phone": "",
    }
}
```
</details>

### <strong>GET /search/:key :</strong> 
Rota criada para retornar as informações de um pokemon/modelo de acordo com uma chave de busca, na rota deve existir a chave de busca. A resposta apresentará uma lista de itens que correspondem a chave de busca nos nomes de modelos ou especies.

<details>
<summary> <strong>Resposta esperada:</strong>  </summary>
<strong>HTTP Status:</strong> 200 (OK). </br>
<strong>Texto:</strong>:
  
  ```javascript
[{
    "id": ,
    "nome": ,
    "descricao": ,
    "diaria": ,
    "especie": ,
    "foto": ,
    "comentarioFoto": ,
    "disponivel": ,
    "userId": ,
    "user": {
      "id": "",
      "nome":"",
      "email": "",
      "foto": "",
      "CPF": "",
      "phone": "",
    }
}]
```
</details>

## Rotas autenticadas

### <strong>GET /user/Pokemons/resume :</strong> 
Rota criada para retornar até três dos pokemons/modelos ativos, mais recentes do usuário. É necessário informar no header o token do usuário.

<details>
<summary> <strong>Header:</strong>  </summary>

  ```javascript
{
    "Authorization": `Bearer ${token}`
}
```
</details>

<details>
<summary> <strong>Resposta esperada:</strong>  </summary>
<strong>HTTP Status:</strong> 200 (OK). </br>
<strong>Texto:</strong>:
  
  ```javascript
[{
    "id": ,
    "nome": ,
    "descricao": ,
    "diaria": ,
    "especie": ,
    "foto": ,
    "comentarioFoto": ,
    "disponivel": ,
    "userId": 
}]
```
</details>

### <strong>GET /user/pokemons/all :</strong> 
Rota criada para retornar todos os pokemons/modelos do usuário. É necessário informar no header o token do usuário.

<details>
<summary> <strong>Header:</strong>  </summary>

  ```javascript
{
    "Authorization": `Bearer ${token}`
}
```
</details>

<details>
<summary> <strong>Resposta esperada:</strong>  </summary>
<strong>HTTP Status:</strong> 200 (OK). </br>
<strong>Texto:</strong>:
  
  ```javascript
[{
    "id": ,
    "nome": ,
    "descricao": ,
    "diaria": ,
    "especie": ,
    "foto": ,
    "comentarioFoto": ,
    "disponivel": ,
    "userId": 
}]
```
</details>

### <strong>GET /user/pokemon :</strong> 
Rota criada para cadastrar um pokemon/modelo. É necessário informar o token do usuario no header.

<details>
<summary> <strong>Header:</strong>  </summary>

  ```javascript
{
    "Authorization": `Bearer ${token}`
}
```
</details>

<details>
<summary> <strong>Corpo da requisição:</strong>  </summary>
<strong>Corpo:</strong>:
  
  ```json
{
    "nome": "",
    "descricao":"",
    "diaria": "",
    "especie": "",
    "foto": "",
    "comentarioFoto": ""
}
```
</details>

<details>
<summary> <strong>Resposta esperada:</strong>  </summary>
<strong>HTTP Status:</strong> 200 (OK). </br>
<strong>Texto:</strong>:
  
  ```javascript
[{
    "id": ,
    "nome": ,
    "descricao": ,
    "diaria": ,
    "especie": ,
    "foto": ,
    "comentarioFoto": ,
    "disponivel": ,
    "userId": 
}]
```
</details>

### <strong>PUT /pokemon/:id/:value :</strong> 
Rota criada para alterar a disponibilidade de um pokemon. É necessário informar no header o token do usuário, e na rota o id do pokemon e o valor da disponibilidade (true ou false).

<details>
<summary> <strong>Header:</strong>  </summary>

  ```javascript
{
    "Authorization": `Bearer ${token}`
}
```
</details>

<details>
<summary> <strong>Resposta esperada:</strong>  </summary>
<strong>HTTP Status:</strong> 200 (OK). </br>
<strong>Texto:</strong>:
  
  ```javascript
{
    "id": ,
    "nome": ,
    "descricao": ,
    "diaria": ,
    "especie": ,
    "foto": ,
    "comentarioFoto": ,
    "disponivel": ,
    "userId": 
}
```
</details>

## ⚙️ Como instalar ?

- Para instalar e rodar localmente no seu computador o atual projeto é necessário ter instalado o banco de dados postgres para criar localmente o banco de dados de deploy e testes. Caso seu computador esteja dentro dos requisitos, os passos para instalar o programa são:

1. Baixe o repositório no seu computador de descompacte ele.
2. Abra em um programa capaz de roda-lo, como por exemplo o visual studio.
3. No terminal, insira o comando abaixo para instalar as dependências:
```javascript
npm i
```
4. Logo após, configure as variavés de ambiente criando os arquivos .env e .env.test. Para essa etapa funcionar corretamente é necessário subistituir as informações presentes por aquelas referentes a sua configuração.
```javascript
POSTGRES_USERNAME=//Insira seu usuário PostGres
POSTGRES_PASSWORD=//Insira senha do seu usuário PostGres
POSTGRES_HOST=localhost //(Não é necessário alterar este)
POSTGRES_PORT=5432 //(Não é necessário alterar este)
POSTGRES_DATABASE=databaseName//(O nome que você deseja no seu banco de dados, caso já existe algum com o nome escolhido convém alterar para evitar perda de informações)
```
5. Por fim, execute o comando abaixo para que o seu banco de dados seja modificado de acordo com a migração. Assim poderá salvas as informações da API em seu dispositivo.
```javascript
dev:migration:generate
```
Pronto, agora o código já está instalado e pronto para ser executado.

## 🏎 Como testar ?

- Para testar localmente o código você precisa fazer a aplicação rodar. execute o comando abaixo:
```javascript
npm run dev
```

Com a aplicação rodando em sua máquina, precisará apenas de uma forma de testar as rotas. Você pode utilizar o programa Postman para testar manualmente as rotas da API, na pasta principal do projeto poderá encontrar o arquivo contendo a collection em formato .json para agilizar esse processo.

Também foram realizados testes automatizados de todas as rotas do projeto. você pode executar o comando abaixo se quiser realizar todos os testes automatizados em sequência:
```javascript
npm run test
```
