import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import typeDef from "./schema";
import { resolvers } from "./resolvers";
import { TrackAPI } from "./datasources/track-api";

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs: typeDef,
    resolvers,
  });
  const { url } = await startStandaloneServer(server, {
    context: async () => {
      // this object becomes our resolver's contextValue, the third positional argument
      const { cache } = server;
      return {
        dataSources: {
          trackAPI: new TrackAPI({ cache }),
        },
      };
    },
  });
  console.log("server is running Query at", url);
}

startApolloServer();
