import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import NotFound from './components/404/NotFound.js';
import Login from './pages/Login'
import CreatePath from './pages/CreatePath'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import LayoutApp from './components/LayoutApp';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <LayoutApp>
      <Route exact path="/" component={Home} />
      <Route path='/path/create' component={CreatePath} exact />
      <Route path='/login' component={Login} exact/>
      <Route path='/signup' component={Signup} exact/>
      <Route path='/profile' component={Profile}exact />
    {/*<Route component={NotFound} />*/}
      </LayoutApp>
    </Switch>
  </BrowserRouter>
);

export default Router;
