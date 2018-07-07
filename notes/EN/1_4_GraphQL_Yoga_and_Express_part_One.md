# 1.4 GraphQL Yoga and Express part One

## section.log

- add graphql-yoga dependencies
- add middleware dependencies, and `@types` for each of them
- code `./src/app.ts` for basic setting of graphql-yoga, middlewares

## tips

- graphql-yoga contains the dependencies below

  - express/apollo-server: Performant, extensible web server framework
  - graphql-subscriptions/subscriptions-transport-ws: GraphQL subscriptions server
  - graphql.js/graphql-tools: GraphQL engine & schema helpers
  - graphql-playground: Interactive GraphQL IDE

- be careful to install `@types` dependencies at **devDependencies**
- just make sure import `cors` **before** import `graphql-yoga` in `./src/app.ts` file

```javascript
import cors from "cors";
import { GraphQLServer } from "graphql-yoga";
```

## issue

- none

## links

## added dependencies

### dependencies

- graphql-yoga
- helmet
- morgan
- cors

### devDependencies

- @types/helmet
- @types/morgan
- @types/cors
