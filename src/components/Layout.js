import React from 'react';
import { Link } from 'react-router-dom';
const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Link to="/">
        <h1>React with Webpack4</h1>
      </Link>
      {children}
    </React.Fragment>
  );
};
export default Layout;