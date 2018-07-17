import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import Place from "../../../entities/Place";

const resolvers: Resolvers = {
  Mutation: {
    DeletePlace: privateResolver(async (_, args, { req }) => {
      const user = req.user;
      try {
        const place = await Place.findOne({ id: args.placeId });
        if (place) {
          if (place.userId === user.id) {
            place.remove();
            return {
              ok: true,
              error: null
            };
          } else {
            return {
              ok: false,
              error: "Not Authorized"
            };
          }
        } else {
          return {
            ok: false,
            error: "Place Not Found"
          };
        }
      } catch (error) {
        return {
          ok: false,
          error: error.message
        };
      }
    })
  }
};

export default resolvers;
