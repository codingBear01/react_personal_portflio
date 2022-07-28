import { React, useContext } from 'react';
import './Toggle.css';
import * as Unicons from '@iconscout/react-unicons';
import { themeContext } from './../../Context';

const Toggle = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  const handleClick = () => {
    theme.dispatch({ type: 'toggle' });
  };

  return (
    <div className="toggle" onClick={handleClick}>
      <Unicons.UilMoon />
      <Unicons.UilSun />
      <div
        className="t-button"
        style={darkMode ? { left: '2px' } : { right: '2px' }}
      ></div>
    </div>
  );
};

export default Toggle;
