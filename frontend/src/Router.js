import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import LayoutApp from "./components/LayoutApp";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/404/NotFound.js';
import Login from './pages/Login'
import CreatePath from './pages/CreatePath'
import Dash from './pages/Dash'
import Signup from './pages/Signup'
import Login from './pages/Login'
import Profile from './pages/Profile'


const Home = () => <h1>Home</h1>
// const Login = () => <h1>Login</h1>
// const Signup = () => <h1>Signup</h1>
// const Profile = () => <h1>Profile</h1>

const Router = () => {
  return (
    <BrowserRouter >
      <LayoutApp>
      <Route exact path="/" component={Home} />
      <Route exact path="/dash" component={Dash} />
      <Route component={NotFound} />
      <Route path='/path/create' component={CreatePath} exact />
      <Route path='/login' component={Login} exact/>
      <Route path='/signup' component={Signup} exact/>
      <Route path='/profile' component={Profile}exact />
    {/*<Route component={NotFound} />*/}
      </LayoutApp>
    </BrowserRouter>
  )
}

export default Router
