const resolvers = {
  Subscription: {
    DriversSubscription: {
      subscribe: (_, __, { pubSub }) => {
        console.log(pubSub);
        return pubSub.asyncIterator("driverUpdate");
      }
    }
  }
};

export default resolvers;
