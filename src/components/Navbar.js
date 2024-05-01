import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import Home from '../pages/Home';

export default function Navbar(props) {
  const [activeMenu, setActiveMenu] = React.useState(false);
  let firstSpanClass;
  let secondSpanClass;
  if (activeMenu) {
    firstSpanClass = "filled-span first-active";
    secondSpanClass = "filled-span second-active";
  }
  else {
    firstSpanClass = "filled-span";
    secondSpanClass = "filled-span";
  }
  return (
    <Router>
      <nav id="navbar">
        <Link to="/info" id="logo" onClick={() => window.scrollTo(0, 0)}><p id="logo-text">Tech Jobs</p></Link>
        <div className='menu-right'>
          <div id="menu-button" onClick={() => setActiveMenu(!activeMenu)}>
            <span className={firstSpanClass}></span>
            <span className="blank-span"></span>
            <span className={secondSpanClass}></span>
            <span className="blank-span"></span>
            <span className={firstSpanClass}></span>
          </div>
        </div>
        <div id="menu">
          {activeMenu ?
            <div id="menu-item-container" onClick={() => setActiveMenu(!activeMenu)}>
              <HashLink to="/info" className="menu-item" onClick={() => window.scrollTo(0, 0)}>Home  →</HashLink>
              <HashLink to="/#about" className="menu-item">About Us  →</HashLink>
              <HashLink to="/#services" className="menu-item">Our Services  →</HashLink>
              <HashLink to="/#faqs" className="menu-item">FAQs  →</HashLink>
              <HashLink to="/#contact" className="menu-item">Get in Touch  →</HashLink>
              <div style={{width: "30%"}}></div>
            </div>
            : null}
        </div>
      </nav>
      <Routes>
        <Route path="/info" element={<Home />} />
      </Routes>
    </Router>
  )
}