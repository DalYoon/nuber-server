import { GetMyPlacesResponse } from "./../../../types/graph.d";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Query: {
    GetMyPlaces: privateResolver(
      async (_, __, { req }): Promise<GetMyPlacesResponse> => {
        try {
          const user = await User.findOne({ id: req.user.id }, { relations: ["places"] });
          if (user) {
            return {
              ok: true,
              error: null,
              places: user.places
            };
          } else {
            return {
              ok: false,
              error: "User Not Found",
              places: null
            };
          }
        } catch (error) {
          return {
            ok: false,
            error: error.message,
            places: null
          };
        }
      }
    )
  }
};

export default resolvers;
