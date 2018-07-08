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
