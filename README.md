# Hospitals
GraphQL API for hospitals management system created with [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/), [GraphQL](https://graphql.org/), [Apollo Server](https://www.apollographql.com/docs/apollo-server/), [MongoDB](https://www.mongodb.com/) and [Mongoose ORM](https://mongoosejs.com/).

## Installation
To install the project, we need to have installed the next:
- Node.js 🟢
- Docker and Docker-compose 🐋

If you don't have Node.js installed, you can install it [here](https://nodejs.org/es/).

If you don't have Docker installed, you can install it [following the Docker documentation](https://docs.docker.com/engine/install/).

<blockquote>
<span>
💡
</span>
<span>
If you install Docker Desktop (on Windows and Mac), it comes with docker compose, but if you install it on Linux you must install it separately.
</span>
</blockquote>


#### Step 1
Clone the project.
```
$ git clone https://github.com/cdlavila/hospitals
```

#### Step 2
Duplicate the `.env.example` file and rename it to `.env`. Then fill in the environment variables.

#### Step 3
Raise the Docker containers, for this you have to run the following command in the terminal, being in the project path.
```
$ docker-compose up -d
```
The above command will build a network with the necessary containers for the project to run: MongoDB.

#### Step 4
Install dependencies.
```
$ npm install
```

#### Step 5
Run the server.

```
$ npm run start
```

#### Step 6
Check server is running, by clicking on the first link that appears in the terminal.

#### Step 7
Open the GraphQL Playground in the browser, by clicking on the second link that appears in the terminal.
