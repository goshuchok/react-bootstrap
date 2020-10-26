import React, { FC } from 'react';
import Jumbotron from './jumbotron';
import { Container } from 'react-bootstrap';

const About: FC = () => {
  return (
    <div>
      <h1>About</h1>
      <Container></Container>
      <Jumbotron />
    </div>
  );
};

export default About;
