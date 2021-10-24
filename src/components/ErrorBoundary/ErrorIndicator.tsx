import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components';
import { Container, TextField } from '../../styled/styled';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  50% {
    transform: rotate(90deg);
  }
  to {
    transform: rotate(0deg);
  }
`;

const Rotate = styled.div`
  width: 5rem;
  margin: 0 auto;
  animation: ${rotate} 2s linear infinite;
`;

const ErrorIndicator: FC = () => {

  return (
    <Container style={{ height: '80vh' }}>
      <TextField
        as='h2'
        transform='uppercase'
        size='5rem'
        style={{ color: '#3f51b5' }}>
        Something bad has happened.<br />
        We are trying to fix everything.<br />
        Please try to visit us a little later <br />
        <Rotate>&#128296;</Rotate>
      </TextField>
    </Container>
  )
}

export default ErrorIndicator;
