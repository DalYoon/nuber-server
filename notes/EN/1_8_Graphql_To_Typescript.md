# 1.8 Graphql To Typescript

## section.log

- very important leture
- how to merge types
- make script to merge types

## tips

### types merging process:

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
- after all, you can get `graph.d.ts` file, and it contains all types you defined in every `.graphql` files, <br>
  so you are able to call your custom types for your typescript code, for example like resolvers

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies

- graphql-to-typescript
- gql-merge
- babel-runtime
