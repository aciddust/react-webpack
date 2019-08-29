import React from 'react';
import { Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
const NavBar = () => {
    return (
      <React.Fragment>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/fragment">FragPage</Link></li>
          <li><a href='https://aciddust.github.io/blog'>Contact</a></li>
        </ul>
      </React.Fragment>
    );
  };
  export default NavBar;