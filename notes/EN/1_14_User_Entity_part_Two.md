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
