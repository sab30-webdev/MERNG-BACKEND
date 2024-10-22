const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");

const { mongoURI } = require("./config");
const typeDefs = require("./graphql/typeDefs");
const resolvers = require("./graphql/resolvers/index");

PORT = process.env.PORT || 5000;
const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
});

mongoose
  .connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => server.listen({ port: PORT }))
  .then((res) => console.log(`Server running at ${res.url}`))
  .catch((err) => console.log(err));
