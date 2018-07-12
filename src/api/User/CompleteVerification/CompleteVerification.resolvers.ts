import User from "../../../entities/User";
import Verification from "../../../entities/Verification";
import {
  CompletePhoneVerificationMutationArgs,
  CompletePhoneVerificationResponse
} from "./../../../types/graph";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    CompleteVerification: async (
      _,
      args: CompletePhoneVerificationMutationArgs
    ): Promise<CompletePhoneVerificationResponse> => {
      const { phoneNumber, key } = args;

      try {
        const verification = await Verification.findOne({
          payload: phoneNumber,
          key
        });

        if (!verification) {
          return {
            ok: false,
            error: "Verification key not vaild",
            token: null
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message,
          token: null
        };
      }

      try {
        const user = await User.findOne({ phoneNumber });
        if (user) {
          user.verifiedPhoneNumber = true;
          user.save();
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
    }
  }
};

export default resolvers;
