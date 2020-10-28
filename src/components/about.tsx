import React, { FC } from 'react';
import {
  Accordion,
  Button,
  Card,
  Col,
  Container,
  OverlayTrigger,
  Row,
  Table,
  Tooltip,
} from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import velazquez from '../velazquez.jpg';
import nature from '../nature.jpg';

import Tosting from './toast';
import CardsTeam from './cards';

const About: FC = () => {
  return (
    <div>
      <h1>About</h1>
      <Row>
        <Col md={12} className="text-center mt-3">
          <h1>Information about person</h1>
        </Col>
        <Col md={9}>
          <Row>
            <Col md="4">
              <Image
                width={250}
                height={250}
                src={velazquez}
                alt="velazques"
                className="m-2"
              />
            </Col>
            <Col md="8">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
                molestiae eaque debitis iure aperiam impedit praesentium non aut
                esse, ab eos facere iusto ratione. Dignissimos iure ea
                distinctio mollitia perspiciatis. Cum nulla molestias cupiditate
                incidunt repudiandae ullam similique debitis velit error enim
                aliquam itaque ad maiores, adipisci a nemo, temporibus esse
                inventore corrupti quasi nihil autem. Quae, sint. Dicta,
                eveniet. Corporis, cum quaerat? Asperiores nisi provident
                cupiditate quia. Earum similique et obcaecati perspiciatis
                nostrum eum adipisci eligendi! Aperiam consequatur magnam, in
                minima cumque culpa, tempora harum enim, illo totam illum! Ipsa
                at nostrum ullam pariatur nihil maiores sint vitae quisquam,
                vero corporis quibusdam id cupiditate unde esse sit libero
                minima vel a. Quisquam porro voluptas rerum modi quod autem
                dicta. Voluptates quibusdam minima, quisquam deleniti corrupti
                quasi labore rerum sunt, blanditiis cupiditate in reiciendis
                accusamus explicabo a illo perferendis sed error magnam? Nobis
                blanditiis quisquam repellat atque, ad doloribus amet.
              </p>
            </Col>
          </Row>
        </Col>
        <Col md={3}>
          <h4>Information</h4>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Position</th>
                <th>Skills</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Front End</td>
                <td>HTML/CSS/JAVASCRIPT</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Back End</td>
                <td>Python/Java/PHP</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Full Stack</td>
                <td>JAVASCRIPT/Python/Java</td>
              </tr>
            </tbody>
          </Table>
        </Col>
        <Col md={12}>
          <Container>
            <Accordion defaultActiveKey="0" className="mb-4">
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                  Our Team
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                  <Card.Body style={{ backgroundColor: 'rgb(33, 37, 41)' }}>
                    <CardsTeam />
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
              <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                  About me!
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                  <Card.Body style={{ backgroundImage: `url(${nature})` }}>
                    <Row>
                      <Col md={6}>
                        <Card style={{ width: '18rem' }}>
                          <Card.Img variant="top" src={velazquez} />
                          <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                              Some quick example text to build on the card title
                              and make up the bulk of the card's content.
                            </Card.Text>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-disabled">
                                  Tooltip!
                                </Tooltip>
                              }
                            >
                              <span className="d-inline-block">
                                <Button
                                  disabled
                                  style={{ pointerEvents: 'none' }}
                                  variant="secondary"
                                >
                                  For me
                                </Button>
                              </span>
                            </OverlayTrigger>
                          </Card.Body>
                        </Card>
                      </Col>
                      <Col md={6}>
                        <Tosting />
                        <p className="mt-3" style={{ color: '#fff' }}>
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Itaque quisquam cumque quasi accusantium
                          commodi. Quasi minus in exercitationem culpa doloribus
                          consequatur voluptas nulla perferendis sint est,
                          inventore sit beatae alias. Ipsa, voluptates? Sequi
                          quibusdam dicta, similique architecto, incidunt et
                          assumenda, officia accusantium impedit fugiat ipsam.
                          Ipsum, cupiditate sint. Earum voluptatem ut eligendi
                          vero nisi temporibus at enim perspiciatis, natus
                          quibusdam. Consectetur ipsa iusto veritatis earum
                          suscipit, harum eaque commodi officia aspernatur
                          perspiciatis ex sunt voluptates cum sit repellendus
                          error ratione rem consequuntur necessitatibus ipsum,
                          enim voluptate modi omnis! Non, assumenda.
                        </p>
                      </Col>
                    </Row>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            </Accordion>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default About;
