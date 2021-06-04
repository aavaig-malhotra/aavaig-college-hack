import React from 'react';
import styled from 'styled-components';
import { data } from '../data/VerifyData';
import { useHistory } from 'react-router-dom';

function EasyVerify() {
  const history = useHistory();

  const goToHome = () => {
    history.push('/');
  };

  return (
    <Container>
      <ContainerContent>
        <ContentHeading>Easy Steps to Verify Your Medicine </ContentHeading>
        <Content>
          {data.map((el) => {
            return (
              <ContentItem key={el.number}>
                <h4>{`${el.number}. ${el.title}`}</h4>
                <p>{el.info}</p>
              </ContentItem>
            );
          })}
        </Content>
        <ButtonBack onClick={goToHome}>Back</ButtonBack>
      </ContainerContent>
    </Container>
  );
}

export default EasyVerify;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2rem;
  background: rgba(220, 199, 170, 0.3);
`;

const ContainerContent = styled.div`
  width: 90%;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentHeading = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: var(--color-apricot);
  margin-bottom: 2rem;
`;

const Content = styled.div`
  width: 70%;
  margin-top: 1rem;
  border: 3px solid var(--color-citrus);
  padding: 1rem 2rem;
`;

const ContentItem = styled.div`
  margin-bottom: 4rem;
  // border: 3px solid var(--color-citrus);
  // padding: 1rem 2rem;
  position: relative;

  h4 {
    font-size: 2rem;
    color: var(--color-blueberry);
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.6rem;
    color: var(--color-blueberry);
  }
`;

const ButtonBack = styled.button`
  margin-top: 2rem;
  margin-bottom: 2rem;
  font-size: 2rem;
  background: transparent;
  outline: none;
  border: 1px solid var(--color-blueberry);
  border-radius: 6px;
  padding: 1rem 3rem;
  color: var(--color-blueberry);
  letter-spacing: 1.8px;
  transition: all 250ms;
  cursor: pointer;
  box-shadow: 0 4px 10px 2px rgba(0, 0, 0, 0.3);

  &:hover {
    background: var(--color-blueberry);
    color: var(--color-citrus);
    transform: translateY(-5px);
  }

  &:active {
    background: var(--color-blueberry);
    color: var(--color-citrus);
    transform: translateY(-2px);
  }
`;
