import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  // uri: "http://localhost:4000/",
  uri: "http://192.168.1.105:4000/",
  cache: new InMemoryCache(),
});

export { client };
