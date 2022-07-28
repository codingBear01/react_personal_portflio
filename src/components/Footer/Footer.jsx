import React from 'react';
import './Footer.css';
import Wave from './../../img/wave.png';
import * as Unicons from '@iconscout/react-unicons';

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="wave" style={{ width: '100%' }} />
      <div className="f-content">
        <span>jokingbear01@gmail.com</span>
        <div className="f-icons">
          <Unicons.UilInstagram color="white" size="3rem" />
          <Unicons.UilFacebook color="white" size="3rem" />
          <Unicons.UilGithub color="white" size="3rem" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
