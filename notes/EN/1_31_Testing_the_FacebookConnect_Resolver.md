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
