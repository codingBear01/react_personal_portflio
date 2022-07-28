import React from 'react';
import './Works.css';
import Upwork from './../../img/Upwork.png';
import Fiverr from './../../img/fiverr.png';
import Amazon from './../../img/amazon.png';
import Shopify from './../../img/Shopify.png';
import Facebook from './../../img/Facebook.png';

const Works = () => {
  return (
    <div className="works">
      <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
          가나다라마바사아자차카타파하이찌니산시욘고로쿠시치나나하치큐쿠쥬
          <br />
          가나다라마바사아자차카타파하이찌니산시욘고로쿠시치나나하치큐쿠쥬
          <br />
          가나다라마바사아자차카타파하이찌니산시욘고로쿠시치나나하치큐쿠쥬
          <br />
          가나다라마바사아자차카타파하이찌니산시욘고로쿠시치나나하치큐쿠쥬
        </span>
        <button className="button s-button">Hire me</button>
        <div className="blur s-blur1" style={{ background: '#abf1ff94' }}></div>
      </div>
      <div className="w-right">
        <div className="w-mainCircle">
          <div className="w-secCircle">
            <img src={Upwork} alt="upwork" />
          </div>
          <div className="w-secCircle">
            <img src={Fiverr} alt="fiverr" />
          </div>
          <div className="w-secCircle">
            <img src={Amazon} alt="amazon" />
          </div>
          <div className="w-secCircle">
            <img src={Shopify} alt="shopify" />
          </div>
          <div className="w-secCircle">
            <img src={Facebook} alt="shopify" />
          </div>
        </div>

        <div className="w-backCircle blueCircle"></div>
        <div className="w-backCircle yellowCircle"></div>
      </div>
    </div>
  );
};

export default Works;
