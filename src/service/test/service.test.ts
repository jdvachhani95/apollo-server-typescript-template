import { typeDefs } from "../serviceSchema";
import resolvers from "../serviceResolver";
import { graphql } from "graphql";
import { makeExecutableSchema } from "graphql-tools";

// create a mocked schema for the tests
const schema = makeExecutableSchema({ typeDefs, resolvers });

describe("User Schema", () => {
  test("Test getAllUsers query", async () => {
    const query = `
        {
            user: getAllUsers {
                name
            }
        }
    `;
    return graphql(schema, query).then((result: any) => {
      const users = result.data.user;
      expect(users.length).toBe(2);
    });
  });
});
