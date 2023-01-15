# RAULbank 💸
O banco dos raul

## About the project 📜
Bank Api, and can
- Create User
- Create account for an user
- Deposit money
- Withdraw money
- Transaction an amount to another user account
- Get your account extract

And is builded with:
- Node.js
- Typescript
- Mongoose ODM
- MongoDB
- Graphql
- Docker-Compose

## Installing the project 📦
Prerequisites:

- [Node.js](https://nodejs.org/en/)
- [Docker](https://docs.docker.com/get-started/)
- [Docker-Compose](https://docs.docker.com/compose/)

Clone the repository to your local machine:

With Https:

```bash
git clone https://github.com/jpbrab0/RAULbank.git
```

With SSH:

```bash
git clone git@github.com:jpbrab0/RAULbank.git
```

With Github CLI:

```bash
gh repo clone jpbrab0/RAULbank
```

## Running the project 🏃

Starting Docker-Compose
1. Install all dependencies of the project with npm:

- `npm i`

2. Setting up the database:

- `docker-compose up -d`

3. Rename the .exemple.env to .env
- `mv .exemple.env .env`

5. Initialize the server:

- `npm start`
---
### [Read the api docs!](/docs/api.md)
---

Made by [jpbrab0](https://github.com/jpbrab0)