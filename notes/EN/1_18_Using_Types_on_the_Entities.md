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
