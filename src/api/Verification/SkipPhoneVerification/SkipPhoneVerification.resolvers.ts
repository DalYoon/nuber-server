import { Resolvers } from "../../../types/resolvers";
import {
  SkipPhoneVerificationMutationArgs,
  SkipPhoneVerificationResponse
} from "../../../types/graph";
import Verification from "../../../entities/Verification";

const resolvers: Resolvers = {
  Mutation: {
    SkipPhoneVerification: async (
      _,
      args: SkipPhoneVerificationMutationArgs
    ): Promise<SkipPhoneVerificationResponse> => {
      const { phoneNumber } = args;

      try {
        const verification = await Verification.findOne({ payload: phoneNumber });

        if (verification) {
          if (!verification.verified) {
            verification.verified = true;
            verification.save();
            return {
              ok: true,
              error: null
            };
          }

          return {
            ok: false,
            error: "It has been verified already"
          };
        } else {
          return {
            ok: false,
            error: "Verification fail"
          };
        }
      } catch (error) {
        return {
          ok: false,
          error
        };
      }
    }
  }
};

export default resolvers;
