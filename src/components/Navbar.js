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
              <HashLink to="/info#about" className="menu-item">About  →</HashLink>
              <HashLink to="/info#impact-on-tech-roles" className="menu-item">AI's Impact on Tech Roles  →</HashLink>
              <HashLink to="/info#ai-jobs-future" className="menu-item">What will AI Jobs Look like in the Future?  →</HashLink>
              <HashLink to="/info#remote-contractors" className="menu-item">The Emergence of Remote Work an AI Contractors  →</HashLink>
              <HashLink to="/info#conclusions" className="menu-item">Conclusions and Predictions  →</HashLink>
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