import React from 'react';
import NBar from './NavBar'
import { Link } from 'react-router-dom';
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <NBar></NBar>
      <Link to="/">
        <h1>React with Webpack4</h1>
      </Link>
      {children}
    </React.Fragment>
  );
};
export default Layout;