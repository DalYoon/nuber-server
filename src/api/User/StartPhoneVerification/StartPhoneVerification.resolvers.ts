import Verification from "../../../entities/Verification";
import {
  StartPhoneVerificationResponse,
  StartPhoneVerificationMutationArgs
} from "./../../../types/graph.d";
import { Resolvers } from "../../../types/resolvers";
import { sendVerification } from "../../../utils/sendSMS";

const resolvers: Resolvers = {
  Mutation: {
    StartPhoneVerification: async (
      _,
      args: StartPhoneVerificationMutationArgs
    ): Promise<StartPhoneVerificationResponse> => {
      const { phoneNumber } = args;

      // filter existing verification
      try {
        const existingVerification = await Verification.findOne({ payload: phoneNumber });
        if (existingVerification) {
          existingVerification.remove();
        }

        // create new verification
        const newVerification = await Verification.create({
          target: "PHONE",
          payload: phoneNumber
        }).save();
        console.log(newVerification);
        // send verification message after create it
        await sendVerification(newVerification.payload, newVerification.key);
        return {
          ok: true,
          error: null
        };
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
