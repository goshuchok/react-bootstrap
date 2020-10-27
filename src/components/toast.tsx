import React, { FC, useState } from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import Toast from 'react-bootstrap/Toast';

const Tosting: FC = () => {
  const [show, setShow] = useState(true);

  const toggleShow = () => setShow(!show);

  return (
    <div>
      <Row>
        <Col xs={6}>
          <Toast show={show} onClose={toggleShow}>
            <Toast.Header>
              <img
                src="holder.js/20x20?text=%20"
                className="rounded mr-2"
                alt=""
              />
              <strong className="mr-auto">Bootstrap</strong>
              <small>11 mins ago</small>
            </Toast.Header>
            <Toast.Body>
              Woohoo, you're reading this text in a Toast!
            </Toast.Body>
          </Toast>
        </Col>
        <Col xs={6}>
          <Button onClick={toggleShow}>
            Toggle Toast <strong>with</strong> Animation
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default Tosting;
