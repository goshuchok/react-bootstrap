import React, { FC } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Slider from './slider';
import water from '../water.jpg';
import house from '../house.jpg';
import Jumbotron from './jumbotron';

const cards = [1, 2, 3, 4, 5, 6];

const Home: FC = () => {
  return (
    <>
      <Slider />
      <Container style={{ padding: '2rem' }}>
        <Row>
          {cards.map((card) => (
            <Col>
              <Card style={{ width: '18rem', marginBottom: '2rem' }} key={card}>
                <Card.Img variant="top" src={water} />
                <Card.Body>
                  <Card.Title>React Bootstrap</Card.Title>
                  <Card.Text>
                    {' '}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  </Card.Text>
                  <Button variant="primary">Learn more</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      <Jumbotron />
      <Container style={{ marginBottom: '30px' }}>
        <Row>
          <Col md={7}>
            <img src={house} height={400} alt={house} />
          </Col>
          <Col md={5}>
            <h2>React Bootstrap</h2>
            <h2>React Bootstrap</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non id
              libero ratione, laborum ipsa itaque voluptate quasi beatae quod
              repellat optio est veniam consectetur nisi cupiditate dignissimos
              dolor tenetur quia! Repudiandae odio exercitationem dolores
              expedita officiis alias debitis veniam voluptates amet enim hic
              eligendi quod labore ipsa, illum illo ducimus et maxime, nemo id.
              Repudiandae ullam perferendis hic saepe ex. Est natus magnam esse
              ut commodi doloremque tempore beatae quidem nulla sint inventore
              dolores similique, velit perspiciatis exercitationem provident vel
              quasi fugit fuga sed molestiae? Eius repellat laboriosam incidunt?
              Provident.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
