<div align="center">
<h1>NG.CASH</h1>

<p>NG.CASH allows users to make international transfers between each other.</p>

</div>
<br />

## Cloning the Repository

You can clone this repository using the following command:

```
git clone https://github.com/rodrigojsdeveloper/ngcash.git
```

## Package Manager

This project uses Yarn as a package manager. Make sure you have it installed before proceeding. If you don't already have it, you can download it <a href="https://classic.yarnpkg.com/lang/en/docs/install">here</a>.

### Warning:

Although Yarn is the recommended package manager, you can also use NPM by running the following commands:

- To install dependencies: npm install
- To start NG.CASH: npm run dev

## Installation of Dependencies

Run the installation of dependencies by running `yarn` in the "client" and "server" folders.

## Configuration of .env

Create a `.env` file based on the `.env.example` file in the "server" folder.

#### For Linux systems, you can use the following command:

```
cp .env.example .env
```

## Starting the Project

Starting the Backend (Server)

In the "server" directory, run the following command:

```
yarn dev
```

Then, make a request using Insomnia or another similar tool.

#### Request example - POST

```
{
  "username": "example",
  "password": "Example@123"
}
```

Starting the Frontend (Client)

In the "client" directory, run the following command:

```
yarn dev
```

Then open the project in your browser.

Access the project at:

#### Project link

```
http://localhost:5173
```

## Starting the Project in Docker-Compose

First, navigate to the "server" folder and edit the .env file as follows:

```
POSTGRES_HOST=localhost

POSTGRES_HOST=postgres
```

Now in the root of the project, run the command:

### For Windows

```
docker-compose up -d
```

### For Linux

```
sudo docker-compose up -d
```

The -d flag runs the project in the background, freeing up the terminal for other uses.

## Documentation

With the project running, visit http://localhost:3000/api/docs to view the documentation.

<br/>
<p align="center">Developed by <a href="https://www.linkedin.com/in/rodrigo-de-jesus-silva/">Rodrigo Silva</a></p>
