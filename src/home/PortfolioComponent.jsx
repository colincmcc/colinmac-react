import React, { Component } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { Config } from '../config';

class PortfolioComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [],
    };
  }
  componentDidMount() {
    fetch('http://localhost:8080/wp-json/wp/v2/projects')
      .then((results) => results.json())
      .then((data) => {
        const projects = data.map((project) => (
            <PortfolioWrapper
              key={project.id}
              bgColor={project.acf.background_color}
            >
              <ProjectTitle>{project.title.rendered}</ProjectTitle>
            </PortfolioWrapper>
          ));
        this.setState({ projects });
      });
  }

  render() {
    return <Portfolio>{this.state.projects}</Portfolio>;
  }
}

export default PortfolioComponent;

const Portfolio = styled.div`
  display: flex;
  flex-direction: column;
`;
const PortfolioWrapper = styled.div`
  display: flex;
  background-color: ${props => props.bgColor};
  height: 100vh;
  width: 100vw;
`;

const ProjectTitle = styled.h1`
  font-size: 6rem;
  margin: auto;
`;
