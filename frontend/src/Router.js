import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import CreatePath from './pages/CreatePath'

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route component={NotFound} />
      <Route path='/path/create' component={CreatePath} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
