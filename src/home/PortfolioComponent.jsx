import React from 'react';
import styled from 'styled-components';

export default function PortfolioComponent({ projectData, showLoader }) {
  const projects = projectData.map(project => (
    <PortfolioWrapper key={project.id} bgColor={project.acf.background_color}>
      <ProjectTitle>{project.title.rendered}</ProjectTitle>
    </PortfolioWrapper>
  ));

  if (showLoader) {
    return <p>Loading...</p>;
  }

  return <Portfolio>{projects}</Portfolio>;
}

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
