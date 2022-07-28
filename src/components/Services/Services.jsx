import { React, useContext } from 'react';
import './Services.css';
import HeartEmoji from './../../img/heartemoji.png';
import Glasses from './../../img/glasses.png';
import Humble from './../../img/humble.png';
import Card from './../Card/Card';
import Resume from './office_worker_damgom.png';
import { themeContext } from './../../Context';
import { motion } from 'framer-motion';

const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const transition = { duration: 1, type: 'spring' };

  return (
    <div className="services" id="Services">
      {/* left side */}
      <div className="awesome">
        <span style={{ color: darkMode ? 'white' : '' }}>My Awesome</span>
        <span>services</span>
        <span>
          가나다라마바사아자차카타파하이찌니산시욘고로쿠시치나나하치큐쿠쥬
          <br />
          가나다라마바사아자차카타파하이찌니산시욘고로쿠시치나나하치큐쿠쥬
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur1" style={{ background: '#abf1ff94' }}></div>
      </div>
      {/* right side */}
      <div className="cards">
        <motion.div
          initial={{ left: '25rem' }}
          whileInView={{ left: '14rem' }}
          transition={transition}
        >
          <Card
            emoji={HeartEmoji}
            heading={'Design'}
            detail={'Figma, Sketch, Photoshop, Adobe, Adobe xd'}
          />
        </motion.div>
        <motion.div
          initial={{ top: '12rem', left: '-11rem' }}
          whileInView={{ left: '-4rem' }}
          transition={transition}
        >
          <Card
            emoji={Glasses}
            heading={'Developer'}
            detail={'HTML, CSS, JavaScript, React, Vue, Angular'}
          />
        </motion.div>
        <motion.div
          initial={{ top: '19rem', left: '25rem' }}
          whileInView={{ left: '12rem' }}
          transition={transition}
        >
          <Card
            emoji={Humble}
            heading={'UI/UX'}
            detail={
              'Lorem ipsum dolor sit, amet consectetur adipisicing elit. '
            }
          />
        </motion.div>
        <div
          className="blur s-blur2"
          style={{ background: 'var(--purple)' }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
