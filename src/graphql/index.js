const { ApolloServer } = require('@apollo/server');
const { ApolloServerPluginLandingPageGraphQLPlayground } = require('@apollo/server-plugin-landing-page-graphql-playground');
const { expressMiddleware  } = require('@apollo/server/express4');
const { loadFilesSync } = require('@graphql-tools/load-files');

const typeDefs = loadFilesSync('./src/graphql/**/*.graphql');
const resolvers = {
  Query: {
    hello: () => 'Hello world!',
  }
}

const useGraphQL = async (app) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground
    ],
  });
  await server.start();
  app.use('/graphql', expressMiddleware(server));
}

module.exports = useGraphQL;
