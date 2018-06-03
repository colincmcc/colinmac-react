import React, { Component } from "react";
import {
  createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "react-redux";
import { ApolloProvider, ApolloClient } from "react-apollo";
import styled from "styled-components";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    // Todo: change uri to production site
    const client = new ApolloClient({
      uri: "http://localhost:8080/graphql"
    });

    const store = createStore(
      combineReducers({
        apollo: client.reducer()
      }),
      {}, // initial state
      compose(applyMiddleware(client.middleware()))
    );

    return (
      // Todo: Apollo not needed yet, since we can't easily use graphql to fetch wordpress custom fields, remove extra code and revert back to using REST
      <ApolloProvider store={store} client={client}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">
            To get started, edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </ApolloProvider>
    );
  }
}

export default App;

const MainGrid = styled.div`
  display: grid;
  grid: auto / repeat(3, 1fr);
`;
