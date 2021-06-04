import React from 'react';
import styled from 'styled-components';

function Team() {
  return (
    <Container>
      <ContainerContent>
        <Heading> Our Team</Heading>
        <ContentItem></ContentItem>
      </ContainerContent>
    </Container>
  );
}

export default Team;

const Container = styled.div`
  margin-top: 2rem;
  height: 60rem;
  background: var(--color-blueberry);
  border-top-right-radius: 10rem;
  padding: 3rem 2rem;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 5rem;
  color: var(--color-apricot);
  letter-spacing: 1.8px;
`;

const ContainerContent = styled.div``;

const ContentItem = styled.div``;
