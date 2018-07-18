# 1.69 Authenticating WebSocket Subscriptions part Two

## section.log

- very important lecture
- how to get currentUser from `onConnect` with `subscription`

## tips

### getting currentUser with onConnect and subscription

1.  put JWT token in header (client)
2.  on graphql-yoga options, get JWT header with `onConnect` (server)
3.  decode JWT token, and return it as `currentUser`
4.  get `currentUser` from `request.connection.context.currentUser`
5.  then, put `currentUser` into `request.context`

```typescript
// in graphql-yoga options, step 1 - 3
subscriptions: {
    path: SUBSCRIPTION_ENDPOINT,
    onConnect: async connectionParams => {
      const token = await connectionParams["X-JWT"];
      if (token) {
        const user = decodeJWT(token);
        if (user) {
          return {
            currentUser: user
          };
        }
      }
      throw new Error("No JWT. Can't subscribe");
    }
  }
```

```typescript
// in graphQL server contructor step 4 - 5
this.app = new GraphQLServer({
  schema,
  context: req => {
    const { connection: { context = null } = {} } = req;
    return {
      req: req.request,
      pubSub: this.pubSub,
      context
    };
  }
});
```

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies
