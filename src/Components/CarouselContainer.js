import React from 'react';
import { Carousel } from 'react-bootstrap';
import image1 from './Images/Argentina-7.jpg';
import image2 from './Images/Argentina-9.jpg';
import image3 from './Images/Japon-8.jpg';
import image4 from './Images/Ingla-5.jpg'
import CardsHome from './CardsHome';

const CarouselContainer = () => {
  return (
    <div className="container ">

      <Carousel>
        <Carousel.Item>
          <img
              className="d-block w-100 border border-sucess rounded-pill"
              src={image1}
              alt="First slide"
          />
    
            <Carousel.Caption>
              <h3>End of the world</h3>
              <p>“End of the World” in the “Land of Fire” (Tierra del Fuego) is at the very southern tip of Argentina.<br/> 
              Town of Ushuaia is the most southern town on the planet - it is only 1,000 km from Antarctica.
              </p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 border border-sucess rounded-pill"
            src={image2}
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>Perito Moreno Glacier</h3>
            <p>The Perito Moreno Glacier (Spanish: Glaciar Perito Moreno) is a glacier located in the Los Glaciares National Park in southwest Santa Cruz Province, Argentina.<br/> 
            It is one of the most important tourist attractions in the Argentine Patagonia.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 border border-sucess rounded-pill"
            src={image3}
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Quasi-National Parks</h3>
            <p>The area of each National and Quasi-National Park is divided into ordinary, special and marine park zones.<br/> 
            Special zones are further subdivided into special protection and class I, II, and III special zones, restricting access and use for preservation purposes. <br/>
            The state owns only approximately half of the land in the parks</p>
          </Carousel.Caption>
    
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 border border-sucess rounded-pill"
              src={image4}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Big Ben</h3>
              <p>Big Ben is the name by which the great bell of the clock located on the north-west side of the Palace of Westminster,<br/>
                the seat of the Parliament of the United Kingdom, in London is known
              </p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>
      <br/><br/>
      <p className='text-ta text-center font-bold'>Trips that our users prefer</p>
      <br/><br/>
      <CardsHome/>
      <br/><br/><br/><br/>
    </div>
    )

}


export default CarouselContainer;