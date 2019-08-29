import React from 'react';
import { Link } from 'react-router-dom';
const NavBar = () => {
    return (
      <React.Fragment>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/fragment">Fragment</Link></li>
          <li><a href="https://aciddust.github.io/blog">Contact</a></li>
        </ul>
      </React.Fragment>
    );
  };
  export default NavBar;