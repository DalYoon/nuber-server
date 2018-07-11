import User from "../../../entities/User";
import { EmailSignInMutationArgs, EmailSignInResponse } from "./../../../types/graph.d";
import { Resolvers } from "../../../types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    EmailSignIn: async (_, args: EmailSignInMutationArgs): Promise<EmailSignInResponse> => {
      const { email, password } = args;
      try {
        const user = await User.findOne({ email });

        // user doesn't exist
        if (!user) {
          return {
            ok: false,
            error: "No User found with that email",
            token: null
          };
        }

        // user exist, password check
        const checkPassword = await user.comparePassword(password);

        // password checked as true
        if (checkPassword) {
          return {
            ok: true,
            error: null,
            token: "Coming Soon"
          };
        }
        // wrong password
        else {
          return {
            ok: false,
            error: "wrong password",
            token: null
          };
        }
      } catch (error) {
        // error
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
