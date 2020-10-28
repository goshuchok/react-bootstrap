import React from 'react';
import { Card, Col, Nav, Row } from 'react-bootstrap';
import {
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
  TiSocialTwitter,
} from 'react-icons/ti';
// import water from '../water.jpg';
import andrew from '../andrew.jpg';

const cards = [1, 2, 3];

const CardsTeam = () => {
  return (
    <div>
      <Row>
        {cards.map((card) => (
          <Col>
            <Card style={{ width: '18rem', margin: '1rem' }} key={card}>
              <Card.Img variant="top" src={andrew} />
              <Card.Body>
                <Card.Title className="text-center">John Doe</Card.Title>
                <Card.Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Recusandae iusto assumenda officiis in perspiciatis, placeat
                  optio aperiam, saepe numquam vero.
                </Card.Text>
                <Nav className="flex-row ">
                  <Nav.Link
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialGithub size={25} />
                  </Nav.Link>
                  <Nav.Link
                    href="http://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialLinkedin size={25} />
                  </Nav.Link>
                  <Nav.Link
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialFacebook size={25} />
                  </Nav.Link>
                  <Nav.Link
                    href="http://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TiSocialTwitter size={25} />
                  </Nav.Link>
                </Nav>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardsTeam;
