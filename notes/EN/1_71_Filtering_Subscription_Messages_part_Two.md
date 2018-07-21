# 1.71 Filtering Subscription Messages part Two

## section.log

- finish `DriversSubscription` resolver
- filter drivers by drivers location

## tips

## issue

### getting user lastLat, lastLng

- in the lecture, there is no `async`, `await` on the second argument function of `withFilter`, check the below

```typescript
// the original code in the lecture
(payload, _, { context }) => {
  const user: User = context.currentUser;
  const {
    DriversSubscription: { lastLat: driverLastLat, lastLng: driverLastLng }
  } = payload;
  const { lastLat: userLastLat, lastLng: userLastLng } = user;
  return (
    driverLastLat <= userLastLat + 0.5 &&
    driverLastLat >= userLastLat - 0.5 &&
    driverLastLng <= userLastLng + 0.5 &&
    driverLastLng >= userLastLng - 0.5
  );
};
```

- In my case, as a result from the above<br>
  There wasn't any notification by listening driver's ReportMovement<br>
  So I just put `console.log`, to check the user and drivers information<br>
  After define `driverLastLat`, `driverLastLng`, `userLastLat`, `userLastLng`<br>
  Like below

```typescript
...
const {
    DriversSubscription: { lastLat: driverLastLat, lastLng: driverLastLng }
  } = payload;
  const { lastLat: userLastLat, lastLng: userLastLng } = user;
  console.log(`users lat, lng = { ${userLastLat}, ${userLastLng} }`);
  console.log(`drivers lat, lng = { ${driverLastLat}, ${driverLastLng} }`);
  return (
...

// result
// users lat, lng = { undefined, undefined }
// drivers lat, lng = { 40.23, 9.72 }
```

- So i put `async`, `await` into the part that getting user

```typescript
async (payload, _, { context }) => {
  const user: User = await context.currentUser;
```

- And it works, I don't know why it needs `async`, `await`, even `currentUser` information is given as argument

## links

## added dependencies

### dependencies

### devDependencies
