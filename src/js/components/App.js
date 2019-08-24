import React from 'react';
// 페이지 라우팅
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import FragPage from './FragPage';
import NotFound from './NotFound';
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/fragment" component={FragPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;