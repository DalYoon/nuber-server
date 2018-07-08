# 1.11 Creating a Virtual Environment on NodeJS

## section.log

- set `.env` file for connecting databse
- create connection with database

## tips

- `dotenv.config()` automatically read `.env` file and put it into `process.env`
- just make sure to import `dotenv` and `dotenv.config()` **before** call `connectOptions`;

```typescript
import dotenv from "dotenv";
dotenv.config();
import connectionOptions from "./ormConfig";
```

## issue

- none

## links

## added dependencies

### dependencies

- dotenv

### devDependencies
