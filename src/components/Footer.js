import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

function Footer() {
  const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 50px;
  outline: none;
  cursor: pointer;
  background: #f4921e;
  color: #fff;
  user-select: none;
}
`;
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          Join the Adventure newsletter to receive our best deals
        </p>
        <p className='footer-subscription-text'>
          You can unsubscribe at any time.
        </p>
        <div className='input-areas'>
          <form>
            <input
              className='footer-input'
              name='Phone Number'
              type='Phone Number'
              placeholder='Your Phone Number'
            />
            <Button
            whileHover={{ scale: 1.05,
             }}
            whileTap={{
              scale: 0.95,
              backgroundColor: '#ce7406',
              border: 'none',
              color: '#000'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 1.5 } }}
          >
           Mein Bhiya mein ama
          </Button>
          </form>
        </div>
      </section>
      
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AlphWood
              </Link>
          </div>
          <small class='website-rights'>ALPHWOOD © 2021</small>
          
        </div>
      </section>
    </div>
  );
}

export default Footer;
