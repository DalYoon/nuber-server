# 1.46 Using Resolver Context for Authentication

## section.log

- very important lecture
- how to recognize users with token
- introduction for `context`

## tips

### process to get the current user information:

1.  after sign in, browser puts user's JWT token in their request header
2.  express middleware catchs that JWT token
3.  `decodeJWT` util decodes the JWT token, and find the user who the token points at
4.  put user information into `request.context`
5.  every resolvers takes `context` as argument, check the resolver type below

```typescript
type Resolver = (parent, args, context, info)
```

6.  you can get the information in `context` through resolver's 3rd argument(context)
7.  then, do whatever you want

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies
