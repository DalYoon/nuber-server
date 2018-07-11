import {
  StartPhoneVerificationResponse,
  StartPhoneVerificationMutationArgs
} from "./../../../types/graph.d";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    StartPhoneVerification: async (
      _,
      args: StartPhoneVerificationMutationArgs
    ): Promise<StartPhoneVerificationResponse> => ""
  }
};

export default resolvers;
