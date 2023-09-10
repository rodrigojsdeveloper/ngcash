# NG.CASH

Desafio:

O objetivo desse projeto é possibilitar que usuários da NG consigam realizar transferências internas entre si.

## Features:

- Cadastro de usuário

- Interação de conta com usuário na hora da criação

- Autenticação

- Transações entre usuários

- Filtro de todas as transações do própio usuário

- Filtros de cash-in, cash-out ou pela data da transação

---

## Diagrama de Entidade Relacional

<img src="./frontend/src/assets/digrama.png">

## Instalação do Projeto

Projeto desenvolvido no backend com Nodejs e no frontend com React.

## 1. Instalação das dependencias

Efetue a criação das dependências com `yarn` ou `npm install` nas pastas backend e frontend.

## 2. Configuração do .env

Crie o arquivo `.env` com base no arquivo `.env.example` na pasta backend.

#### Se estiver no Linux, rode esse comando na pasta backend

```
cp .env.example .env
```

## 3. Iniciando apenas frontend ou backend do projeto no navegador ou insomnia

#### Powershell ou Bash

Acesse a pasta backend e rode o comando:

```
yarn dev
```

ou

```
npm run dev
```

e rode uma requisição no insomnia

#### Exemplo de requisição - POST

```
{
    "username": "example",
    "password": "Example@123"
}
```

Acesse a pasta frontend e rode o comando:

```
yarn dev
```

ou

```
npm run dev
```

e abra o projeto no seu navegador

#### Link do projeto

```
http://localhost:5173
```

## 3. Iniciando todo o projeto no docker-compose

Na raiz do projeto rode o comando:

### Windows

```
docker-compose up -d
```

### Linux

```
sudo docker-compose up -d
```

a flag `-d` é para rodar o projeto em 'background' deixando o terminal livre para uso

## 4. Documentação

Com o projeto rodando acesse `http://localhost:3000/docs` para ver a documentação do projeto no swagger

## Desenvolvedor

<a href="https://www.linkedin.com/in/rodrigo-de-jesus-silva">
    <img src="frontend/src/assets/icons8-linkedin-48.png" />
</a>
