import React, { FC } from 'react';
import { Carousel } from 'react-bootstrap';
import scotland from '../scotland.jpg';
import eclipse from '../eclipse.jpg';
import nature from '../nature.jpg';

const Slider: FC = () => {
  return (
    <Carousel>
      <Carousel.Item style={{ height: '600px' }}>
        <img className="d-block w-100" src={scotland} alt="First slide" />
        <Carousel.Caption>
          <h3>React Bootstrap Slider 1</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel magnam
            adipisci tempora illo blanditiis. Deleniti, voluptatem. Assumenda
            totam eum rerum! Delectus soluta consequuntur quod illum laborum
            modi, omnis ex nisi.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <img className="d-block w-100" src={eclipse} alt="Second slide" />
        <Carousel.Caption>
          <h3>React Bootstrap Slider 2</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel magnam
            adipisci tempora illo blanditiis. Deleniti, voluptatem. Assumenda
            totam eum rerum! Delectus soluta consequuntur quod illum laborum
            modi, omnis ex nisi.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{ height: '600px' }}>
        <img className="d-block w-100" src={nature} alt="Third slide" />
        <Carousel.Caption>
          <h3>React Bootstrap Slider 3</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel magnam
            adipisci tempora illo blanditiis. Deleniti, voluptatem. Assumenda
            totam eum rerum! Delectus soluta consequuntur quod illum laborum
            modi, omnis ex nisi.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
