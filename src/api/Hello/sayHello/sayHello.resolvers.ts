import { SayHelloQueryArgs, sayHelloResponse } from "src/types/graph";

const resolvers = {
  Query: {
    sayHello: (_, args: SayHelloQueryArgs): sayHelloResponse => ({
      text: `hey hello ${args.name}`,
      error: false
    })
  }
};

export default resolvers;
