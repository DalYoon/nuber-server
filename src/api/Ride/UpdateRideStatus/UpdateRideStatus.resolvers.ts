import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { UpdateRideStatusMutationArgs, UpdateRideStatusResponse } from "../../../types/graph";
import User from "../../../entities/User";
import Ride from "../../../entities/Ride";

const resolvers: Resolvers = {
  Mutation: {
    UpdateRideStatus: privateResolver(
      async (_, args: UpdateRideStatusMutationArgs, { req }): Promise<UpdateRideStatusResponse> => {
        const user: User = req.user;

        if (user.isDriving) {
          try {
            let ride: Ride | undefined;

            // driver is looking ride for accepting, which has current state as requesting
            if (args.status === "ACCEPTED") {
              ride = await Ride.findOne({
                id: args.rideId,
                status: "REQUESTING"
              });

              // if there is requesting ride, update driver
              if (ride) {
                ride.driver = user;
                user.isTaken = true;
                user.save();
              }
            } else {
              ride = await Ride.findOne({
                id: args.rideId,
                driver: user
              });
            }

            if (ride) {
              ride.status = args.status;
              ride.save();
              return {
                ok: true,
                error: null
              };
            } else {
              return {
                ok: false,
                error: "Can't update ride"
              };
            }
          } catch (error) {
            return {
              ok: false,
              error: error.message
            };
          }
        } else {
          return {
            ok: false,
            error: "You are not a driver"
          };
        }
      }
    )
  }
};

export default resolvers;
