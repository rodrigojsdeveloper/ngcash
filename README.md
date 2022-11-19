<p align="center">
<img src="https://img.shields.io/badge/nodejs-18.2.0-blue">
<img src="https://img.shields.io/badge/react-18.0.0-blue">
</p>

# Processo Seletivo NG.CASH

Desafio:

O ojetivo desse desafio é possibilitar que usuários da NG consigam realizar transferências internas entre si.

## Features:

- Cadastro de usuário

- Interação de conta com usuário na hora da criação

- Autenticação

- Transações entre usuários

- Filtro de todas as transações do própio usuário

- Filtros de cash-in, cash-out ou pela data da transação

---

## Diagrama de Entidade Relacional

<img src="./front-end/src/assets/digrama.png">

## Instalação do Projeto

Projeto desenvolvido no back-end com Nodejs e no front-end com React.

### 1. Instalação das dependencias

Efetue a criação das dependências com `yarn` nas pastas back-end e front-end.

### 2. Configuração do .env

Crie o arquivo `.env` com base no arquivo `.env.example` na pasta back-end.

### 3. Iniciando apenas back ou front do projeto no navegador ou insomnia

#### Powershell ou Bash

Acesse a pasta back-end e rode o comando:

`yarn dev`

Após isso entre na pasta front-end e rode o comando:

`yarn dev`

e abra o projeto no seu navegador.

### 3. Iniciando todo o projeto no docker-compose

Na raiz do projeto rode o comando:

## Windows

`docker-compose up -d`

## Linux

`sudo docker-compose up -d`

a flag `-d` é para rodar o projeto em 'background' deixando o terminal livre para usar

### 4. Documentação

Com o projeto rodando acesse `http://localhost:3000/docs` para ver a documentação do projeto no swagger

## Desenvolvedor

<a href="https://github.com/Rodrigodeveloperjr">
    <img src="front-end/src/assets/icons8-github-48.png" />
</a>
<a href="https://www.linkedin.com/in/rodrigo-de-jesus-silva">
    <img src="front-end/src/assets/icons8-linkedin-48.png" />
</a>
