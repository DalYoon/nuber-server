import { Greeting } from "./../../types/graph.d";

const resolvers = {
  Query: {
    sayHello: (): Greeting => {
      return {
        err: false,
        text: "Hello!"
      };
    }
  }
};

export default resolvers;
