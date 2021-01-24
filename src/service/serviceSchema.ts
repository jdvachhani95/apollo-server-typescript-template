import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type User {
    name: String
  }
  type Query {
    getAllUsers: [User]
  }
`;
