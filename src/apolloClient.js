import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({
  uri:
    process.env.REACT_APP_GRAPHQL_API_ENDPOINT ||
    "https://api.linear.app/graphql"
});

const authLink = setContext((_, { headers }) => {
  const token = process.env.REACT_APP_LINEAR_API_KEY;
  return {
    headers: {
      ...headers,
      authorization: token ? `${token}` : "",
    },
  };
});

const errorLink = new ApolloLink((operation, forward) => {
  return forward(operation).map((response) => {
    if (response.errors) {
      response.errors.forEach((err) => {
        console.error("GraphQL Error:", err);
      });
    }
    return response;
  });
});

export const client = new ApolloClient({
  link: ApolloLink.from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache(),
});