import React from 'react';

import './Header.css';
import LoadingButton from '../LoadingButton/LoadingButton';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <h1 className="app__header-h1">Monsters</h1>
      <p></p>
      
      <LoadingButton/>
      
    </div>
    
      
    
  </div>
);

export default Header;