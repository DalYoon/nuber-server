import { withFilter } from "../../../../node_modules/graphql-yoga";
import User from "../../../entities/User";

const resolvers = {
  Subscription: {
    DriversSubscription: {
      subscribe: withFilter(
        (_, __, { pubSub }) => pubSub.asyncIterator("driverUpdate"),
        async (payload, _, { context }) => {
          const user: User = await context.currentUser;
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
        }
      )
    }
  }
};

export default resolvers;
