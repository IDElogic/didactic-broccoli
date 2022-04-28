import React from 'react';
import './Navbar.css';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = React.useState(false);
    return (
      <nav className="app__navbar">
        <div className="app__navbar-logo">
          Monsters
        </div>
        <ul className="app__navbar-links">
          <li ><a href="#home">Home</a></li>
          <li ><a href="#contact">Contact</a></li>
        </ul>
        <div className="app__navbar-login">
          <a href="#login" className="p__opensans">| Login |</a>
          <div />
        </div>
        <div className="app__navbar-smallscreen">
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
             
              <ul className="app__navbar-smallscreen_links">
                <li><a href="#home" onClick={() => setToggleMenu(false)}>Home</a></li>
                <li><a href="#contact" onClick={() => setToggleMenu(false)}>Contact</a></li>
              </ul>
            </div>
          )}
        </div>
      </nav>
    );
  };
  
  export default Navbar;