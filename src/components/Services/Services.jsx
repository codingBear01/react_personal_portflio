import React from 'react';
import './Services.css';
import HeartEmoji from './../../img/heartemoji.png';
import Glasses from './../../img/glasses.png';
import Humble from './../../img/humble.png';
import Card from './../Card/Card';

const Services = () => {
  return (
    <div className="services">
      {/* left side */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>services</span>
        <span>
          가나다라마바사아자차카타파하이찌니산시욘고로쿠시치나나하치큐쿠쥬
          <br />
          가나다라마바사아자차카타파하이찌니산시욘고로쿠시치나나하치큐쿠쥬
        </span>
        <button className="button s-button">Download CV</button>
        <div className="blur s-blur1" style={{ background: '#abf1ff94' }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <Card
          emoji={HeartEmoji}
          heading={'Design'}
          detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
        />
      </div>
    </div>
  );
};

export default Services;
