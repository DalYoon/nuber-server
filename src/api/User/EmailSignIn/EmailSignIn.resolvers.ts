import User from "../../../entities/User";
import { EmailSignInMutationArgs, EmailSignInResponse } from "./../../../types/graph";
import { Resolvers } from "../../../types/resolvers";
import createJWT from "../../../utils/createJWT";

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
            error: "No User be found with that email",
            token: null
          };
        }

        // user exist, password check
        const checkPassword = await user.comparePassword(password);

        // password checked as true
        if (checkPassword) {
          const token = createJWT(user.id);
          return {
            ok: true,
            error: null,
            token
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
