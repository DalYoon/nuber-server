# 1.1 Project Setup- Git & Installation

## section.log

- make project
- add basic dependencies
- config `tsconfig.json`, `tslint.json`

## tips

- `tsc --init` command will create tsconfig file automatically

## issue

- none

## links

- [tsconfig.json file](https://github.com/nomadcoders/nuber-server/blob/6ae7fc176776d85c987df1263edd7e05041b1661/tsconfig.json)
- [tslint.json file](https://github.com/nomadcoders/nuber-server/blob/6ae7fc176776d85c987df1263edd7e05041b1661/tslint.json)

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

- the script below will monitor the change of .ts file and also .graphql file automatically (nodemon, ts-node)
- just make sure there is no space between file types `ts,graphql`

```json
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

- add graphql-yoga dependency
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

---

# 1.5 GraphQL Yoga and Express part Two

## section.log

- code `./src/index.ts` for running graphql-yoga

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
- create `./src/api/` for defining types, resolvers
- create `./src/schema.ts` for merging types, resolvers

## tips

- `./src/api/` directory have types, queries, resolvers to handle datas
- `./src/schema.ts` file merges `./src/api/` directory which is every types, resolvers
- `merge-graphql-schemas` dependency doesn't have `type` definition. So when you import this dependency in your code, vcs wouldn't give you any description or guide for type of it. Don't panic. It's totally fine

```javascript
import { fileLoader, mergeResolvers, mergeTypes } from "merge-graphql-schemas";
```

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

- write `./src/schema.ts` file for merging `query`, `resolvers`
- get `.graphql`, `resolvers` file with through `fileLoader/merge-graphql-schemas`
- merge it, put it into `makeExcutableSchema/graphql-tools`
- put generated schema into `GraphqlServer.schema`

## tips

- `path.join(__dirname, './')` returns `/files/current/directory/`

```javascript
// sample code (code path = ~project-path/nuber-server/src/test.js)
const path = require("path");
const myPath = path.join(__dirname, "./");
console.log(myPath);

// it returns => ~project-path/nuber-server/src/
```

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.8 Graphql To Typescript

## section.log

- very important leture
- how to merge types
- make script to merge types

## tips

- types merging process:

  1.  with `gql-merge`, merge all `.graphql` files in `./src/api/` into one file `./src/schema.graphql`
  2.  with `graphql-to-typescript`, merge all types in `./src/schema.graphql` to `./src/types/graph.d.ts`

```json
// script sample
package.json
...
"script": {
    "pretypes": "gql-merge --out-file ./src/schema.graphql ./src/api/**/*.graphql",
    "types": "graphql-to-typescript ./src/schema.graphql ./types/graph.d.ts",
}
...
```

- to proceed merging process above, you need `babel-rumtime` as dev dependency
- after all, you can get `graph.d.ts` file, and it contains all types you defined in `.graphql` files, so you are able to call your custom types for your typescript code, for example like resolvers

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

- graphql-to-typescript
- gql-merge
- babel-runtime

---

# 1.9 Typechecking Graphql Arguments

## section.log

- define query argument and merge it to type
- usage for merged query argument types

## tips

- the name of merged type for query argument is `query name` + `root query name` + `Args`, check the example below

```graphql
# .graphql type definition
type Query {
  sayHello(name: String!): SayHelloResponse!
}
```

```typescript
// merged type in graphql.d.ts
export interface SayHelloQueryArgs {
  name: string;
}
```

- the argument: `name` of sayHello Query in `.graphql` goes interface: `SayHelloQueryArgs` in `graph.d.ts`

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.10 Configuring TypeORM

## section.log

- basic setting for typeorm
- make `ConnectionOptions`

## tips

- for using `psql` command, `postgres-client` should be installed

## issue

- none

## links

## added dependencies

### dependencies

- typeorm
- pg

### devDependencies

---

# 1.11 Creating a Virtual Environment on NodeJS

## section.log

- set `.env` file to define additional project environment for connecting databse
- create connection with database

## tips

- `dotenv.config()` automatically read `.env` file and put it into `process.env`
- just make sure to import `dotenv` and `dotenv.config()` **before** call `connectOptions`;

```typescript
import dotenv from "dotenv";
dotenv.config();
import connectionOptions from "./ormConfig";
```

## issue

- none

## links

## added dependencies

### dependencies

- dotenv

### devDependencies

---

# 1.12 User Entity GraphQL Type

## section.log

- define user type `User.graphql`

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.13 User Entity part One

## section.log

- write `User.ts` entity for `User model`

## tips

- `class validator` validates custom decorators like `email decorator`

## issue

- none

## links

- [class validator](https://github.com/typestack/class-validator)

## added dependencies

### dependencies

- class-validator

### devDependencies

---

# 1.14 User Entity part Two

## section.log

- write `User.ts` for `User Entity`

## tips

- `synchronize` option in `ormConfig.ts` gives auto migrations for entities
- simple example for generating data in entity

```typescript
// ~/Entity/User.ts
...
@Column({ type: "text" })
  firstName: string;

@Column({ type: "text" })
  lastName: string;

get fullname(): string {
  return `${this.firstName} ${this.lastName}`;
}
...
```

## issue

- none

## links

## added dependencies

### dependencies

- bcrypt

### devDependencies

- @types/bcrypt

---

# 1.15 Hashing and Encrypting User Passwords

## section.log

- process for hashing password
- `@BeforeInsert`, `@BeforeUpdate` decorators

## tips

- hashing process:
- hash salt

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.16 Verifying User Password

## section.log

- verify password with `bcrypt.compare` function

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.17 Verification Entity part One

## section.log

- define type and entity for verification

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.18 Using Types on the Entities

## section.log

- define custom definition which has limited options
- add script for generating types automatically

## tips

- you can custom definition in `types/<name whatever>.d.ts`, check the usage below

```typescript
// types/test.d.ts
export type sayWhatever = "Hello" | "Bye";
```

```typescript
// entities/Test.ts
import { sayWhatever } from 'path for <test.d.ts>'

...
@Column()
message: sayWhatever;
```

- the code above, gives only limited available input strings to `message` column ("Hello, "Bye")

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.19 Creating the Verification Key

## section.log

- how to generate key with native javascript function `Math.floor()`, `Math.random()`, `Math.floor()`, `toString()`, `toString(36)`, `substr()`

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.20 Place Entity

## section.log

-

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.20 Place Entity

## section.log

- define entity and type for `Place`

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.21 Ride Entity

## section.log

- define entity and type for `Ride`

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.22 Chat and Message Entities part One

## section.log

- very important lecture
- define entities and types for `Chat`, `Message` and entity relationships

## tips

- relationship definition process:
  `add argument for joining other entity in each of types`
  -> `use @OneToMany, @ManyToOne decorators to match column`
- checkout the usage below

```typescript
// entities/Classroom.ts
import Student from './Student'

@OneToMany(type => Student, student => student.classroom)
students: Student[];
```

```typescript
// entities/Student.ts
import Classroom from './Classroom'

@ManyToOne(type => Classroom, classroom => classroom.students)
classroom: Classroom;
```

## issue

- none

## links

- [typeorm one-to-many, many-to-one relationship guide](https://github.com/typeorm/typeorm/blob/master/docs/many-to-one-one-to-many-relations.md)

## added dependencies

### dependencies

### devDependencies

---

# 1.23 Chat and Message Entities part Two

## section.log

- define relationship between `User`, `Chat` entities

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.24 Model Relationships like a Boss

## section.log

- define relationship between `User`, `Verification`
- define relationship between `User`, `Ride`

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.25 Resolver Types

## section.log

- define `resolver` definition

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.26 Planning the Resolvers part One

## section.log

- write features lists

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.27 Planning the Resolvers part Two

## section.log

- write features lists

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.28 FacebookConnect Resolver part One

## section.log

- define mutation type for `facebook connect`

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.29 FacebookConnect Resolver part Two

## section.log

- very important lecture
- how to define resolver, catch error
- how to select user in db

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.30 FacebookConnect Resolver part Three

## section.log

- very important lecture
- make resolver for creating user, inserting user data into database

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.31 Testing the FacebookConnect Resolver

## section.log

- test the mutation
- adjust for nullable columns

## tips

## issue

- the mutation returned `"error": "value \"<facebook id>\" is out of range for type integer"`
  - Question: WTF does that mean 'fbId' is integer, I defined it as string, let's look
    - [x] in `User.graphql`, fbId: String
    - [x] in `entities/User.ts`, `@Column({ type: "text", nullable: true }) fbId: string;
    - [x] in `types/types.d.ts`, `FacebookConnectMutationArgs` fbId: string;
  - Reason
    - in `resolver`, checking existing user
      ~`const existingUser = await User.findOne(fbId)`~
      `const existingUser = await User.findOne({ fbId })`

## links

## added dependencies

### dependencies

### devDependencies

---

# 1.32 EmailSignIn Resolver part One

## section.log

- define email sign in resolver, type

## tips

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

---
