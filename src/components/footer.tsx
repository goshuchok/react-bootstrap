import React, { FC } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import { Styles } from './navy-bar';
import {
  TiSocialFacebook,
  TiSocialGithub,
  TiSocialLinkedin,
  TiSocialTwitter,
} from 'react-icons/ti';
import { FaPhoneAlt, FaRegEnvelope } from 'react-icons/fa';

const Footer: FC = () => {
  return (
    <div>
      <Styles>
        <Container fluid style={{ backgroundColor: '#212529', color: '#fff' }}>
          <Row>
            <Col xs={6} md={6}>
              <h6 className="mt-3">About</h6>
              <p className="text-justify" style={{ color: '#adb1b8' }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident quod ipsum odio voluptas aperiam, quo, non praesentium
                optio officia aspernatur debitis minima cupiditate corporis
                dicta expedita, saepe at deserunt nostrum!Cumque, doloremque
                distinctio maxime doloribus harum nisi nostrum dolores, nesciunt
                consequatur et voluptates optio quisquam nam provident
                recusandae dicta aliquam minus quaerat, fugit esse amet? Quaerat
                quisquam natus perferendis magnam.
              </p>
            </Col>
            <Col xs={6} md={4}>
              <h6 className="mt-3">Location</h6>
              <p>22, Lorem ipsum dolor, consectetur adipiscing</p>
              <p className="mb-0">
                {' '}
                <FaPhoneAlt className="mr-2" />
                (541) 754-3010
              </p>
              <p>
                {' '}
                <FaRegEnvelope className="mr-2" />
                info@hsdf.com
              </p>
            </Col>
            <Col xs={6} md={1}>
              <h6 className="mt-3">Navigation</h6>
              <Nav className="flex-column">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="/users">User</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/">Help</Nav.Link>
                <Nav.Link href="/">For Resellers</Nav.Link>
              </Nav>
            </Col>

            <Col xs={6} md={1}>
              <h6 className="mt-3">Follow Us </h6>
              <Nav className="flex-column float-left ">
                <Nav.Link
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialGithub size={30} />
                </Nav.Link>
                <Nav.Link
                  href="http://linkedin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialLinkedin size={30} />
                </Nav.Link>
                <Nav.Link
                  href="https://www.facebook.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialFacebook size={30} />
                </Nav.Link>
                <Nav.Link
                  href="http://twitter.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TiSocialTwitter size={30} />
                </Nav.Link>
              </Nav>
            </Col>
          </Row>
          <hr style={{ borderTopColor: '#bbb', opacity: '0.5' }} />
          <Container
            style={{
              display: 'flex',
              justifyContent: 'center',
              padding: '10px',
            }}
          >
            <p style={{ display: 'flex', fontSize: '14px' }}>
              Copyright &copy; {new Date().getFullYear()}. All Rights Reserved
              by &nbsp;
              <Nav.Link
                href="https://react-bootstrap.netlify.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                React Bootstrap
              </Nav.Link>
            </p>
          </Container>
        </Container>
      </Styles>
    </div>
  );
};

export default Footer;
