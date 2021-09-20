import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import NavBar from './NavBar';
import Home from '../Home';
import Test from '../containers/Test';
import Results from '../containers/Results';

const App = () => (
  <Router>
    <Switch>
      <>
        <div className="">
          <div className="">
            <Route path="/" component={NavBar} />
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Test} type="guest" />
            <Route exact path="/results" component={Results} type="guest" />
          </div>
        </div>
      </>
    </Switch>
  </Router>
);

export default App;