import { Resolvers } from "../../../types/resolvers";
import privateResolver from "../../../utils/privateResolver";
import User from "../../../entities/User";

const resolvers: Resolvers = {
    Query: {
        GetNearbyDrivers: privateResolver( async (_, __, { req }) => {
            const user: User = req.user;
            try {
                const drivers = 
            } catch (error) {
                return {
                    ok: false,
                    error: error.message,
                    drivers: null
                }
            }
        } )
    }
};

export default resolvers;