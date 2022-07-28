import { React, useState, useContext, useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';
import { themeContext } from './../../Context';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_10508re',
        'template_iq9oo1c',
        form.current,
        'CXHznfJ3hVsZdf8Bx'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <div className="w-left">
        <div className="awesome">
          <span style={{ color: darkMode ? 'white' : '' }}>Get in touch</span>
          <span>Contact me</span>
          <div
            className="blur s-blur1"
            style={{ background: '#abf1ff94' }}
          ></div>
        </div>
      </div>

      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            className="user"
            type="text"
            name="user_name"
            placeholder="Name"
          />
          <input
            className="user"
            type="email"
            name="user_email"
            placeholder="Email"
          />
          <textarea
            className="user"
            name="message"
            placeholder="Message"
          ></textarea>
          <input className="button" type="submit" value="Send" />
          <span>{done && 'Thanks for contacting me'}</span>
          <div
            className="blur c-blur1"
            style={{ background: 'var(--purple)' }}
          ></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
