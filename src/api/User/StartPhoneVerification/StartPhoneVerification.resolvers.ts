import Verification from "../../../entities/Verification";
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
    ): Promise<StartPhoneVerificationResponse> => {
      const { phoneNumber } = args;
      try {
        const existingVerification = await Verification.findOne({ payload: phoneNumber });
        if (existingVerification) {
          existingVerification.remove();
        }

        const newVerification = await Verification.create({
          target: "PHONE",
          payload: phoneNumber
        }).save();
        // sending message
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    }
  }
};

export default resolvers;
