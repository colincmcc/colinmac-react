import React from 'react';

import styled from 'styled-components';

export default function PortfolioComponent({
  projectData,
  showLoader,
  fetchPortfolio,
}) {
  if (showLoader) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {projectData.map((data, index) => (
        <PortfolioWrapper bgColor={data.background_color}>
          <ProjectTitle>This is a test to see if it renders</ProjectTitle>

          <ProjectTitle>{data.title}</ProjectTitle>
          <button onClick={() => fetchPortfolio('haunt-pop-up')}>
            {' '}
            Press Me{' '}
          </button>
        </PortfolioWrapper>
      ))}
    </div>
  );
}

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
