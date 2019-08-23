import React from 'react';
// 페이지 라우팅
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './Home';
import DynamicPage from './DynamicPage';
import NotFound from './NotFound';
const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/dynamic" component={DynamicPage} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;