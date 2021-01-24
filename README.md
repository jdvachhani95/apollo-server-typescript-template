# Apollo-Server-Typescript-Template

A starter template for developing a graphql server, using apollo-server-express. It uses typescript and express, and it uses jest as a testing framework.

### Getting started

- Run in development `npm run start:dev`

- Compile your code and put it in the /dist folder `npm run build`

- Run the compiled code `npm run start`

- Test with jest `npm run test`

- Test and watch `npm run test.watch`

### Project structure:

       package-scripts.js - this is where all the scripts & dependencies listed
       .tsconfig.json - configuration for the typescript
       .jest.config.js - configuration for the testing using jest

       test/
       src/ - |
              | test/ - |
                        | service.test.ts: unit test for queries

              | service/ - |
                           | serviceSchema.ts: schema & queries definations
                           | serviceResolvers.ts: resolver

              | - schema.ts: this file merges all the different graphql parts and export an executable schema
              | - server.ts: created a apollo server with express

### Example usage

Let's see an example, you can run the graphql server using `npm run start:dev`, and go to [http://localhost:3000/graphql](http://localhost:3000/graphql)

```graphql
query getAllUsers {
  getAllUsers {
    name
  }
}
```
