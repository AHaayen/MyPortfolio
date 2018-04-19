import React from 'react';
import { Link } from 'react-scroll';


class NavigationBar extends React.Component {


  render() {
    return (
        <nav className="container navbar navbar-expand-lg ">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active">
              <Link className="nav-link" to="aboutMe" href="" smooth={true} duration={900}>About Me</Link>
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="portfolio" href="" smooth={true} duration={900}>Portfolio</Link>              
              </li>
              <li className="nav-item">
              <Link className="nav-link" to="skills" href="" smooth={true} duration={900}>Skills</Link>
              
              </li>
            </ul>
          </div>
        </nav>      
    )
  }
}



export default NavigationBar;