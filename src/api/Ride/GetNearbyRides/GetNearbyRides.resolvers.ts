import { GetNearbyRidesResponse } from "./../../../types/graph.d";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import { getRepository, Between } from "../../../../node_modules/typeorm";
import Ride from "../../../entities/Ride";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Query: {
    GetNearByRides: privateResolver(
      async (_, __, { req }): Promise<GetNearbyRidesResponse> => {
        const user: User = req.user;

        if (user.isDriving) {
          try {
            const { lastLat, lastLng } = user;
            const rides = await getRepository(Ride).find({
              status: "REQUESTING",
              pickUpLat: Between(lastLat - 0.05, lastLat + 0.05),
              pickUpLng: Between(lastLng - 0.05, lastLng + 0.05)
            });

            return {
              ok: true,
              error: null,
              rides
            };
          } catch (error) {
            return {
              ok: false,
              error: error.message,
              rides: null
            };
          }
        } else {
          return {
            ok: false,
            error: "You are not a driver",
            rides: null
          };
        }
      }
    )
  }
};

export default resolvers;
