# 1.77 UpdateRideStatus Resolver part Two

## section.log

- define `UpdateRideStatus` resolver

## tips

### ride status updating process:

1.  driver gets a ride information which is reported around them and having status 'REQUESTING'
2.  if that ride be found, driver paticipates to the ride as a 'driver', updates `ride.driver = driver`(themselves)
3.  then, driver changes their `isTaken` status to be true
4.  finally, driver changes ride status to be 'ACCEPTED'

## issue

- none

## links

## added dependencies

### dependencies

### devDependencies
