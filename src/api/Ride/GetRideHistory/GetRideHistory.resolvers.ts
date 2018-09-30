import { GetRideHistoryResponse } from "./../../../types/graph.d";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Query: {
    GetRideHistory: privateResolver(
      async (_, __, { req }): Promise<GetRideHistoryResponse> => {
        const user: User = req.user;

        try {
          const { id } = user;

          const userInfo = await User.findOne(
            { id },
            { relations: ["ridesAsPassenger", "ridesAsDriver"] }
          );

          if (!userInfo) {
            return {
              ok: false,
              error: "User doesn't exist",
              ridesAsDriver: null,
              ridesAsPassenger: null
            };
          }

          return {
            ok: true,
            error: null,
            ridesAsDriver: userInfo.ridesAsDriver,
            ridesAsPassenger: userInfo.ridesAsPassenger
          };
        } catch (error) {
          return {
            ok: false,
            error,
            ridesAsDriver: null,
            ridesAsPassenger: null
          };
        }
      }
    )
  }
};

export default resolvers;
