# Projeto Driven n° 18: Freela (refatoração)

  O atual projeto possui como proposta a elaboração de uma API Restful, com banco de dados PostGres, capaz de gerenciar as requisições de uma aplicação de redes sociais. Ele foi desenvolvido com intuíto acadêmico para a formação Full Stack pela Driven Education. O projeto tinha uma proposta livre, o que permitia a escolha das rotas e entidades. Originalmente foi feito utilizando as tecnologias Mongo + Node.Js, porém foi refatorada para utiliza TypeScript e o banco PostGreSQL.
  
  Se quiser experimentar as funcionalidades sem baixar localmente o código pode utilizar o link abaixo para acessar o deploy da API: 

  **[🚀 Link do Deploy](https://deploy-freela.onrender.com)** (  Em construção ...)


## 📖 Índice
1. Visão Geral
2. Tecnologias
3. Banco de dados
4. Rotas
5. Como instalar ?
6. Como testar ?

## 📋 Visão Geral 


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

## 🗃️ Banco de Dados

  O banco de dados da aplicação está no seguinte formato:
   
## 🚏 Rotas

### <strong>POST /health:</strong> 
Rota de autenticação para checar se o sistema está no ar e funcionando corretamente. 
<details>
<summary> <strong>Resposta esperada:</strong>  </summary>
<strong>HTTP Status:</strong> 200 (OK). </br>
<strong>Texto:</strong> "I'm OK!".

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
POSTGRES_DATABASE=sportingBet//(O nome que você deseja no seu banco de dados, caso já existe algum com o nome escolhido convém alterar para evitar perda de informações)
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
Mas também existe a opção de realizar testes específicos separadamente :
```javascript
npm run test integration //para rodar apenas os testes de integração
npm run test unit // para rodar apenas os testes unitários
npm run test integration bets //para rodar aprenas os testes unitários referentes a rota bets
//pode subistituir o bets acima por games, health ou participants se quiser testar as demais rotas.
```
