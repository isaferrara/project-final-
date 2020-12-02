import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/404/NotFound.js';
import CreatePath from './pages/CreatePath'
import Dash from './pages/Dash'


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/dash" component={Dash} />
      <Route path="/path/create" component={CreatePath} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
