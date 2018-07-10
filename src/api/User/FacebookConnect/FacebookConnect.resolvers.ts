import { FacebookConnectMutationArgs, FacebookConnectResponse } from "./../../../types/graph.d";
import { Resolvers } from "../../../types/resolvers";
import User from "../../../entities/User";

const resolvers: Resolvers = {
  Mutation: {
    FacebookConnect: async (
      _,
      args: FacebookConnectMutationArgs
    ): Promise<FacebookConnectResponse> => {
      // filter existing user
      try {
        const { fbId } = args;
        const existingUser = User.findOne(fbId);
        if (existingUser) {
          return {
            ok: true,
            error: null,
            token: "Coming Soon"
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }

      // make new account
      try {
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }
    }
  }
};

export default resolvers;
