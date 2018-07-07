# 1.2 Project Setup. Typescript and NodeJS

## section.log

- write script for cammand `yarn dev`

## tips

- the script below will monitor the change of .ts file and also .graphql file automatically (nodemon, ts-node)

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
