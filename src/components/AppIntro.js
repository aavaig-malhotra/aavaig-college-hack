import React from 'react';
import styled from 'styled-components';
import '../index.css';
import { Link } from 'react-router-dom';

function AppIntro() {
  return (
    <Container id='intro'>
      <ContainerContent className='text-bounce'>
        <Heading> Ensuring authenticity and transparency always</Heading>
        <ContentBox>
          <ContentItem>
            <ItemLeft className='info'>
              <h2>Image Processing!!</h2>
              <p>
                This WebApp uses Image Processing to verify the authentic
                medicines and the duplicate ones. You can upload images of the
                medicine and our Image Processing Algorithms will verify the
                medicine authenticity by comparing with various discrepancies
                present in different medicines.
              </p>
            </ItemLeft>
            <ItemRight className='image'>
              <img src='/assets/data-processing.png' />
            </ItemRight>
          </ContentItem>

          <ContentItem>
            <ItemLeft className='image'>
              <img src='/assets/qr-code.png' />
            </ItemLeft>
            <ItemRight className='info'>
              <h2>QR Code Scanner!!</h2>
              <p>
                This WebApp has an option of QR Code Scanner where you can scan
                the QR code present on a medicine to get a manufacturer
                verification for the medicine. You can now easily distinguish
                between duplicate and original medicine.
              </p>
            </ItemRight>
          </ContentItem>

          <ContentItem>
            <ItemLeft className='info'>
              <h2>Check Yourself As Well..</h2>
              <p>
                This WebApp also provides you the facility to check your
                medicines yourself. To check about some of the ways to check for
                duplicate medicines{' '}
                <Anchor to='/easy-verify'>Click here</Anchor>
              </p>
            </ItemLeft>
            <ItemRight className='image'>
              <img src='/assets/search.png' />
            </ItemRight>
          </ContentItem>
        </ContentBox>
      </ContainerContent>
    </Container>
  );
}

export default AppIntro;

const Container = styled.div`
  margin-top: 4rem;
  padding: 1.5rem 2rem;
`;

const ContainerContent = styled.div`
  // display: grid;
  // place-items: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;
`;

const Heading = styled.h1`
  text-align: center;
  font-size: 4.5rem;
  color: var(--color-apricot);
  position: relative;
  width: 85%;
`;

const ContentBox = styled.div`
  width: 80%;
  margin-top: 5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 3rem;
`;

const ContentItem = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  grid-column-gap: 2rem;
`;

const ItemLeft = styled.div`
  &.info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    h2 {
      color: var(--color-blueberry);
      font-size: 3rem;
      font-weight: 800;
      font-family: sans-serif;
      margin-bottom: 2.5rem;
      width: 90%;
    }
    p {
      width: 90%;
      color: var(--color-blueberry);
      font-size: 1.8rem;
      font-weight: 500;
    }
  }

  &.image {
    height: 32rem;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const ItemRight = styled(ItemLeft)``;

const Anchor = styled(Link)`
  text-decoration: none;
  color: var(--color-apricot);
  position: relative;

  &::after {
    content: '';
    bottom: -1px;
    left: 0;
    right: 0;
    height: 2px;
    position: absolute;
    background-color: var(--color-apricot);
    transform: scaleX(0);
    transition: all 250ms;
    transform-origin: left;
  }

  &:active {
    color: var(--color-apricot);
  }

  &:hover {
    &::after {
      transform: scaleX(1);
    }
  }
`;
