import { SayHelloResponse, SayHelloQueryArgs } from "./../../types/graph.d";

const resolvers = {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): SayHelloResponse => {
      return {
        err: false,
        text: `Hello ${args.name}`
      };
    }
  }
};

export default resolvers;
