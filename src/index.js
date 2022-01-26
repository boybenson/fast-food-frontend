import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "tw-elements";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/schema";

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
