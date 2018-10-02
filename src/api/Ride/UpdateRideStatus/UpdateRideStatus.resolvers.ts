import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { UpdateRideStatusMutationArgs, UpdateRideStatusResponse } from "../../../types/graph";
import User from "../../../entities/User";
import Ride from "../../../entities/Ride";
import Chat from "../../../entities/Chat";

const resolvers: Resolvers = {
  Mutation: {
    UpdateRideStatus: privateResolver(
      async (
        _,
        args: UpdateRideStatusMutationArgs,
        { req, pubSub }
      ): Promise<UpdateRideStatusResponse> => {
        const user: User = req.user;

        if (user.isDriving) {
          try {
            let ride: Ride | undefined;

            // driver is looking ride for accepting, which has current state as requesting
            if (args.status === "ACCEPTED") {
              ride = await Ride.findOne(
                {
                  id: args.rideId,
                  status: "REQUESTING"
                },
                { relations: ["passenger", "driver"] }
              );

              // if there is requesting ride, update driver
              if (ride) {
                ride.driver = user;
                user.isTaken = true;
                user.save();
                const chat = await Chat.create({
                  driver: user,
                  passenger: ride.passenger,
                  ride
                }).save();
                ride.chat = chat;
                ride.save();
              }
            }

            // after ride has been accepted
            else {
              ride = await Ride.findOne(
                {
                  id: args.rideId,
                  driver: user
                },
                { relations: ["passenger", "driver"] }
              );
            }

            if (ride) {
              // finish the ride
              if (args.status === "FINISHED") {
                const driver: User | undefined = await User.findOne({ id: ride.driverId });
                const passenger: User | undefined = await User.findOne({ id: ride.passengerId });

                if (driver && passenger) {
                  driver.isTaken = false;
                  passenger.isRiding = false;
                  driver.save();
                  passenger.save();
                }
              }

              ride.status = args.status;
              ride.save();
              pubSub.publish("rideUpdate", { RideStatusSubscription: ride });
              return {
                ok: true,
                error: null,
                rideId: ride.id
              };
            } else {
              return {
                ok: false,
                error: "Can't update ride",
                rideId: null
              };
            }
          } catch (error) {
            return {
              ok: false,
              error: error.message,
              rideId: null
            };
          }
        } else {
          return {
            ok: false,
            error: "You are not a driver",
            rideId: null
          };
        }
      }
    )
  }
};

export default resolvers;
