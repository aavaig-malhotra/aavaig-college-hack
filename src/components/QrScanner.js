import React, { useState, Component } from 'react';
import QrReader from 'react-qr-scanner';
import styled from 'styled-components';
import { Route, Link } from 'react-router-dom';

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: 'No result',
    };

    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data) {
    console.log(data && data.text);

    data &&
      this.setState({
        result: data.text,
      });
  }
  handleError(err) {
    console.error(err);
  }

  render() {
    const previewStyle = {
      height: 320,
      width: 430,
    };

    return (
      <Container>
        <QrReader
          delay={this.state.delay}
          style={previewStyle}
          onError={this.handleError}
          onScan={this.handleScan}
        />
        <p>
          {this.state.result === 'https://verified-aavaig.netlify.app/' ? (
            <Route
              path='/qr-scanner'
              component={() => {
                window.location.href = 'https://verified-aavaig.netlify.app/';
              }}
              target='_blank'
            />
          ) : (
            ''
          )}
        </p>
        <Link to='/'>
          <button>Go To Homepage</button>
        </Link>
      </Container>
    );
  }
}
export default Test;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;

  button {
    margin-top: 4rem;
    background: var(--color-blueberry);
    border: none;
    outline: none;
    color: var(--color-citrus);
    font-size: 2rem;
    font-weight: 500;
    border-radius: 4px;
    cursor: pointer;
    padding: 1rem 2rem;
    transition: all 250ms;

    &:hover {
      transform: translateY(-3px);
    }
  }
`;
