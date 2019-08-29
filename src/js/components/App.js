import React from 'react';
// 페이지 라우팅
import { Link, Switch, Route, BrowserRouter as Router} from 'react-router-dom';
import Home from './Home';
import FragPage from './FragPage';
import NotFound from './NotFound';
const App = () => {
  return (
    <Router>
      
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/fragment" component={FragPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </Router>
  );
};
export default App;