import React from 'react';

import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding' id='contact'>
    
    <div className='app__footer-links'>

      <div className='app__footer-links_contact'>
          <h1 className='app__footer-headtext'>Contact</h1>
          <p >+1 345-678-9101</p>
          <p >+1 234-567-8910</p>
      </div>

      <div className='app__footer-links_logo'>
          <h1>Monsters</h1>  
      </div>

      <div className='app__footer-links_address'>
      <h1 className='app__footer-headtext'>Address</h1>
          <p >Sweden</p>
          <p >567 89</p>
         

      </div>

    </div> 

    <div className='footer__copyright'>
      <p className='p__opensans'>2022 by <a href="https://blibb.net">Me</a> <br></br> All rights reserved</p>
    </div>
  </div>
);

export default Footer;
