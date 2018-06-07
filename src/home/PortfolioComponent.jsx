import React, { Component } from 'react';
import shortid from 'shortid';
import styled from 'styled-components';
import { Config } from '../config';

export default function PortfolioComponent({ projectData, showLoader }) {
  if (showLoader) {
    return <p>Loading...</p>;
  }

  return (
    <Portfolio>
      {projectData.map(project => (
        <PortfolioWrapper key={project.id} bgColor={project.background_color}>
          <ProjectTitle>{project.title}</ProjectTitle>
        </PortfolioWrapper>
      ))}
    </Portfolio>
  );
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
