import React from 'react'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div id="main">
  <div className="container">
  
    <nav>
      <div className="nav-fostrap">
        <ul>
          <li><a href>Home</a></li>
          <li><a href="javascript:void(0)">Web Design<span className="arrow-down" /></a>
            <ul className="dropdown">
              <li><a href>HTML</a></li>
              <li><a href>CSS</a></li>
              <li><a href>Javascript</a></li>
              <li><a href>JQuery</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">Blogger<span className="arrow-down" /></a>
            <ul className="dropdown">
              <li><a href>Widget</a></li>
              <li><a href>Tips</a></li>
            </ul>
          </li>
          <li><a href="javascript:void(0)">SEO<span className="arrow-down" /></a>
            <ul className="dropdown">
              <li><a href>Tools</a></li>
              <li><a href>Backlink</a></li>
            </ul>
          </li>
          <li><a href>Google Adsense</a></li>
          <li><a href>Advertising</a></li>
          <li><a href>Business</a></li>
        </ul>
      </div>
      <div className="nav-bg-fostrap">
        <div className="navbar-fostrap"> <span /> <span /> <span /> </div>
        <a href className="title-mobile">Fostrap</a>
      </div>
    </nav>
    <div className="content">
    </div>
  </div>
</div>

  )
}

export default Navbar
