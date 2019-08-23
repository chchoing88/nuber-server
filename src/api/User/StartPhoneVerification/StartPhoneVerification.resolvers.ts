import {
  StartPhoneVerificationMutationArgs,
  StartPhoneVerificationResponse
} from "src/types/graph";
import { Resolvers } from "src/types/resolvers";

const resolvers: Resolvers = {
  Mutation: {
    StartPhoneVerification: async (
      _,
      args: StartPhoneVerificationMutationArgs
    ): Promise<StartPhoneVerificationResponse> => {}
  }
};

export default resolvers;
