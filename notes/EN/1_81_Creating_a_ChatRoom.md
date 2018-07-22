# 1.81 Creating a ChatRoom

## section.log

- define creating Chat Room function
- creating chat room function in `UpdateRideStatus` resolver

## tips

- creating chat room function doesn't have resolver for that
- it automatically create when driver accept a ride request
- in `UpdateRideStatus`, after driver update ride status, define creating a chat room

```typescript
...
// UpdateRideStatus resolver
if (ride) {
    ride.driver = user;
    user.isTaken = true;
    user.save();
    // after driver update ride status, creat a chat
    await Chat.create({
        driver: user,
        passenger: ride.passenger
        }).save();
    }
...
```

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies
