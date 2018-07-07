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
