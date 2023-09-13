<div align="center">
	<h1>NG.CASH</h1>

The objective of this project is to allow NG.CASH users to carry out internal transfers between themselves.

</div>

## Features:

- User registration

- Account interaction with the user at the time of creation

- Authentication

- Transactions between users

- Filter for all transactions of the user

- Filters for cash-in, cash-out, or by transaction date

---

## Entity Relationship Diagram

<img src="./frontend/src/assets/digrama.png">

## Project Installation

The project is developed in the backend with Node.js and in the frontend with React.

## 1. Installing Dependencies

Create the dependencies by running yarn in both the backend and frontend folders.

## 2. Configuration of .env

Create the .env file based on the .env.example file in the backend folder.

#### If you are on Linux, run this command in the backend folder

```
cp .env.example .env
```

## 3. Starting Only Frontend or Backend in the Browser or Insomnia

#### Powershell ou Bash

Access the backend folder and run the command:

```
yarn dev
```

and make a request in Insomnia.

#### Request Example - POST

```
{
    "username": "example",
    "password": "Example@123"
}
```

Access the frontend folder and run the command:

```
yarn dev
```

and open the project in your browser.

#### Project Link

```
http://localhost:5173
```

## 3. Starting the Entire Project with docker-compose

At the root of the project, run the command:

### Windows

```
docker-compose up -d
```

### Linux

```
sudo docker-compose up -d
```

The -d flag is used to run the project in the background, leaving the terminal free for use.

## 4. Documentation

With the project running, access http://localhost:3000/api/docs to view the project documentation in Swagger.

## Developer

<div>
  <a href="https://www.linkedin.com/in/rodrigo-de-jesus-silva" target="_blank">
		<img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white">
	</a>
	<a href="mailto:rodrigojsdeveloper@gmail.com" rel="noreferrer" target="_blank">
	  <img src="https://img.shields.io/badge/Gmail-D14836?style=for-the-badge&logo=gmail&logoColor=white">
	</a>
</div>
