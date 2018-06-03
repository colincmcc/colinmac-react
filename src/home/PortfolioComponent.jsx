import React from "react";
import styled from "styled-components";

export default function PortfolioComponent({
  portfolioData,
  showLoader,
  fetchPortfolio
}) {
  if (showLoader) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      {portfolioData.map((data, index) => (
        <PortfolioWrapper bgColor={data.bgColor}>
          <ProjectTitle>{data.title}</ProjectTitle>
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
