# 1.1 Project Setup- Git & Installation

## section.log

- make project
- add dependencies
- config `tsconfig.json`, `tslint.json`

## tips

- `tsc --init` command will create tsconfig file automatically

## issue

- none

## links

- [tsconfig file config](https://github.com/nomadcoders/nuber-server/blob/6ae7fc176776d85c987df1263edd7e05041b1661/tsconfig.json)
- [tslint file config](https://github.com/nomadcoders/nuber-server/blob/6ae7fc176776d85c987df1263edd7e05041b1661/tslint.json)

## added dependencies

### dependencies

### devDependencies

- typescript
- ts-node
- nodemon
- tslint-config-prettier
- @types/node

---

# 1.2 Project Setup. Typescript and NodeJS

## section.log

- write script for cammand `yarn dev`

## tips

- the script below will monitor the change of ts file and also graphql file automatically (nodemon, ts-node)

```
package.json
...
"scripts": {
    "dev": "cd src && nodemon --exec ts-node index.ts -e ts, graphql"
}
...
```

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.3 A word on @types

## section.log

- no added code
- explanation for the dependencies start with @types

## tips

- `@types` dependencies are just type definitions for the follow dependencies after `@types/`

```
  @types/node: type definitions for node
  @types/express: type definitions for express
  .
  .
  .
```

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.4 GraphQL Yoga and Express part One

## section.log

- add graphql-yoga dependencies
- add middleware dependencies, `@types` for each of them
- code `./src/app.ts` for basic setting of graphql-yoga, middlewares

## tips

- graphql-yoga contains the dependencies below

  - express/apollo-server: Performant, extensible web server framework
  - graphql-subscriptions/subscriptions-transport-ws: GraphQL subscriptions server
  - graphql.js/graphql-tools: GraphQL engine & schema helpers
  - graphql-playground: Interactive GraphQL IDE

- be careful to install `@types` dependencies at **devDependencies**
- just make sure import `cors` **before** import `graphql-yoga` in `./src/app.ts` file

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

---

# 1.5 GraphQL Yoga and Express part Two

## section.log

- code `./src/index.ts` for options of graphql-yoga

## tips

- check `Options` in `graphql-yoga`

## issue

- none

## links

- [graphql-yoga docs](https://github.com/prismagraphql/graphql-yoga/blob/master/README.md)

## added dependencies

### dependencies

### devDependencies

---

# 1.6 API and Schema Structue part One

## section.log

- explanation for basic schema and query structure
- create `./src/api/` for defining types, queries, resolvers
- create `./src/schema.ts` for merging types, queries, resolvers

## tips

- `./src/api/` directory have types, queries, resolvers to handle datas
- `./src/schema.ts` file merges `./src/api/` directory which is every types, queries, resolvers
- `merge-graphql-schemas` dependency doesn't have `type` definition. So when you import this dependency in your code, vcs wouldn't give you any description or guide for type of it. Don't panic. It's totally fine
- `import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";`
- `path` is provided by `node` as default

## issue

- none

## links

[merge-graphql-schemas docs](https://github.com/okgrow/merge-graphql-schemas)

## added dependencies

### dependencies

- graphql-tools
- merge-graphql-schemas

### devDependencies

---

# 1.7 API and Schema Structue part Two

## section.log

- explanation for basic schema and query structure
- create `./src/api/` for defining types, queries, resolvers
- create `./src/schema.ts` for merging types, queries, resolvers

## tips

- `./src/api/` directory have types, queries, resolvers to handle datas
- `./src/schema.ts` file merges `./src/api/` directory which is every types, queries, resolvers
- `merge-graphql-schemas` dependency doesn't have `type` definition. So when you import this dependency in your code, vcs wouldn't give you any description or guide for type of it. Don't panic. It's totally fine
- `import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";`
- `path` is provided by `node` as default

## issue

- none

## links

[merge-graphql-schemas docs](https://github.com/okgrow/merge-graphql-schemas)

## added dependencies

### dependencies

- graphql-tools
- merge-graphql-schemas

### devDependencies
