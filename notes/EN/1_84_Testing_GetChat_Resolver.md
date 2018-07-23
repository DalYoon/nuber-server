# 1.84 Testing GetChat Resolver

## section.log

- finish `GetChat` resolver

## tips

## issue

### getting passenger data from UpdateRideStatus resolver

- when ride status being update, `UpdateRideStatus` resolver also create `Chat` for a chat room
- to create a `Chat`, we need to get `passenger` and `driver` datas to define owners of this chat room
- to get `passenger` data from `ride`, we need to define relations in the findOne query

```typescript
// UpdateRideStatus resolver
...
ride = await Ride.findOne(
    {
        id: args.rideId,
        status: "REQUESTING"
    },
    { relations: ["passenger"] }
);
...
```

## links

## added dependencies

### dependencies

### devDependencies
