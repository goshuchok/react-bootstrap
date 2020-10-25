import React, { FC } from 'react';
import { Container } from 'react-bootstrap';

const Footer: FC = () => {
  return (
    <div>
      <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
        <Container
          style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}
        >
          <p>React Bootstrap</p>
        </Container>
      </Container>
    </div>
  );
};

export default Footer;
