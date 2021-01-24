import express from "express";
import { ApolloServer } from "apollo-server-express";
import { createServer } from "http";
import compression from "compression";
import cors from "cors";
import { typeDefs } from "./service/serviceSchema";
import resolvers from "./service/serviceResolver";
const app = express();
app.use("*", cors());
app.use(compression());
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
server.applyMiddleware({ app, path: "/graphql" });
const httpServer = createServer(app);
httpServer.listen({ port: 3000 }, (): void =>
  console.log(`🚀GraphQL-Server is running on http://localhost:3000/graphql`)
);
