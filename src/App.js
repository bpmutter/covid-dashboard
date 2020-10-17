import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "apollo-link-context";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import Consumer from "components/Consumer";
import Header from "components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";
import getAuthToken from "api/getAuthToken";

const theme = createMuiTheme({
  palette: {
    type: "dark",
  },
});

const httpLink = createHttpLink({
  uri: "https://realm.mongodb.com/api/client/v2.0/app/covid-19-qppza/graphql",
});

const authLink = setContext(async (_, { headers }) => {
  const { token } = await getAuthToken();
  console.log("auth token is...", token);
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${token}`,
    },
  };
});

const client = new ApolloClient({
  uri: "https://realm.mongodb.com/api/client/v2.0/app/covid-19-qppza/graphql",
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ApolloProvider client={client}>
        <Header />
        <Consumer />
      </ApolloProvider>
    </ThemeProvider>
  );
}

export default App;
