import React from 'react';
import './Intro.css';
import Github from './../../img/github.png';
import LinkedIn from './../../img/linkedin.png';
import Instagram from './../../img/instagram.png';
import Vector1 from './../../img/Vector1.png';
import Vector2 from './../../img/Vector2.png';
import Boy from './../../img/boy.png';
import Thumbup from './../../img/thumbup.png';
import Crown from './../../img/crown.png';
import GlassesImoji from './../../img/glassesimoji.png';
import FloatingDiv from './../FloatingDiv/FloatingDiv';

const Intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>Hi! I Am</span>
          <span>Kang Myeongmo</span>
          <span>My goal is to be Junior Front-end Developer</span>
        </div>

        <button className="button i-button">Hire me</button>
        <div className="i-icons">
          <img src={Github} alt="github" />
          <img src={LinkedIn} alt="linkedin" />
          <img src={Instagram} alt="instagram" />
        </div>
      </div>

      <div className="i-right">
        <img src={Vector1} alt="vector1" />
        <img src={Vector2} alt="vector2" />
        <img src={Boy} alt="boy" />
        <img src={GlassesImoji} alt="glassesImoji" />
        <div style={{ top: '-4%', left: '68%' }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
        <div style={{ top: '18rem', left: '0rem' }}>
          <FloatingDiv image={Thumbup} txt1="Best Design" txt2="Award" />
        </div>
        {/* blur divs */}
        <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
        <div
          className="blur"
          style={{
            top: '17rem',
            left: '-11rem',
            width: '21rem',
            height: '11rem',
            background: '#c1f5ff',
          }}
        ></div>
      </div>
    </div>
  );
};

export default Intro;
