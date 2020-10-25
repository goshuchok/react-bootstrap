import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import mountain from '../mountain.jpg';
import styled from 'styled-components';

const Styles = styled.div`
  .jumbo {
    background: url(${mountain}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    position: relative;
    height: 400px;
    z-index: -2;
  }
  .overlay {
    position: absolute;
    background-color: #000;
    opacity: 0.1;
    z-index: -1;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
`;

const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
      <div className="overlay"></div>
      <Container>
        <h1>React Bootstrap</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident
          itaque suscipit animi iusto rem corporis magni ea temporibus
          repudiandae corrupti expedita, soluta laborum dolores repellat. Nam
          nisi voluptates hic quam!
        </p>
      </Container>
    </Jumbo>
  </Styles>
);

export default Jumbotron;
