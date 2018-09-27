import { UpdateMyProfileResponse, UpdateMyProfileMutationArgs } from "./../../../types/graph.d";
import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";
import cleanNullArgs from "../../../utils/cleanNullArgs";

const resolvers: Resolvers = {
  Mutation: {
    UpdateMyProfile: privateResolver(
      async (_, args: UpdateMyProfileMutationArgs, { req }): Promise<UpdateMyProfileResponse> => {
        const user: User = req.user;
        const notNull: any = cleanNullArgs(args);

        // if there is new password
        if (notNull.password !== null && notNull.password !== undefined) {
          user.password = notNull.password;
          user.save();
          delete notNull.password;
        }

        try {
          await User.update({ id: user.id }, { ...notNull });
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
    )
  }
};

export default resolvers;
