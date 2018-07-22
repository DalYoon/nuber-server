import { withFilter } from "graphql-yoga";
import User from "../../../entities/User";
const resolvers = {
  Subscription: {
    RideStatusSubscription: {
      subscribe: withFilter(
        (_, __, { pubSub }) => pubSub.asyncIterator("rideUpdate"),
        (payload, __, { context }) => {
          const user: User = context.currentUser;
          const {
            RideStatusSubscription: { driverId, passengerId }
          } = payload;
          return driverId === user.id || passengerId === user.id;
        }
      )
    }
  }
};

export default resolvers;
