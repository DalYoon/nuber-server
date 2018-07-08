# 1.9 Typechecking Graphql Arguments

## section.log

- define query argument and merge it
- usage for merged query argument

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

- the argument`name` of sayHello in `.graphql` goes `SayHelloQueryArgs` in `graph.d.ts`

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies
