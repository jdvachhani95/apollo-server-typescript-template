import { makeExecutableSchema } from "graphql-tools";
import { ServiceTypeDefs } from "./service/serviceSchema";
import serviceResolvers from "./service/serviceResolver";
import ServiceResolvers from "./service/serviceResolver";

export const schema = makeExecutableSchema({
  typeDefs: ServiceTypeDefs,
  resolvers: ServiceResolvers,
});
