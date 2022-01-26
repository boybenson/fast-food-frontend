import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "tw-elements";
import { ApolloProvider } from "@apollo/client";
import { client } from "./graphql/schema";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <App />
      </ApolloProvider>
    </Provider>
    ,
  </React.StrictMode>,
  document.getElementById("root")
);
