import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <Container id='main'>
      <ContainerContent>
        <ContentLeft>
          <h1>VerifiGo</h1>
          <p>
            Your one and only on the go medicine verification partner. Verify
            authenticity of a medicine anytime and anywhere.
          </p>
        </ContentLeft>
        <ContentRight>
          <img src='/assets/verification.svg' />
        </ContentRight>
      </ContainerContent>
    </Container>
  );
}

export default Main;

const Container = styled.div`
  background-color: var(--color-blueberry);

  border-bottom-left-radius: 10rem;
  display: grid;
  place-items: center;
`;

const ContainerContent = styled.div`
  width: 80%;
  display: flex;
  height: 70vh;
`;

const ContentLeft = styled.div`
  width: 50%;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    color: var(--color-apricot);
    font-size: 4.5rem;
    margin-bottom: 2.5rem;
    letter-spacing: 3px;
  }

  p {
    width: 100%;
    color: var(--color-citrus);
    font-size: 1.9rem;
    font-weight: 600;
  }
`;

const ContentRight = styled.div`
  display :grid;
  place-items:center;
  overflow : hidden;

  img {
     width : 100%;
      height : 80vh;
    }
  }
`;
