import { ApolloError } from "apollo-server-express";
const resolvers = {
  Query: {
    getAllUsers: async (_: any, args: any) => {
      try {
        const mockUsers = [{ name: "xyz" }, { name: "abc" }];
        return mockUsers;
      } catch (error) {
        throw new ApolloError(error);
      }
    },
  },
};

export default resolvers;