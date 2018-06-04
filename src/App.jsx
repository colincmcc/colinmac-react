import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PortfolioComponent from './home/PortfolioComponent';
import styled from 'styled-components';

/*
* Began to use Graphql with wordpress backend.
* Had difficulties exposing custom fields and post-types.
* Reverted to REST and Redux. Separated Redux with the ducks
* system to remove it in the future with React Context API and Graphql.
*/
class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={PortfolioComponent} />
          <Route exact path="/home" component={PortfolioComponent} />
        </div>
      </Router>
    );
  }
}

export default App;

const MainGrid = styled.div`
  display: grid;
  grid: auto / repeat(3, 1fr);
`;
