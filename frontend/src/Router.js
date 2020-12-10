import React from 'react'
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom'
import LayoutApp from "./components/LayoutApp";
import Home from './components/Home';
import NotFound from './components/404/NotFound.js';
import Login from './pages/Login'
import CreatePath from './pages/CreatePath'
import Dash from './pages/Dash'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import DetailsPath from './pages/DetailsPath'
import ContentTopic from './pages/ContentTopic'
import Multimedia from './pages/Multimedia'
import Donate100 from './pages/Donate100'
import Donate200 from './pages/Donate200'
import Donate300 from './pages/Donate300'
import Donate400 from './pages/Donate400'
import Progreso from "./pages/Progreso"
import ChooseDonation from './pages/ChooseDonation'
import PrivateRoute from "./components/PrivateRoute"
import PrivDash from "./components/PrivDash"


///Dummy Components
//const Home = () => <h1>Home</h1>
// const Login = () => <h1>Login</h1>
// const Signup = () => <h1>Signup</h1>
// const Profile = () => <h1>Profile</h1>

const Success = () => <h1>Success Payment</h1>
const Failure = () => <h1>Failure Payment</h1>
const Pending = () => <h1>Pending Payment</h1>

const Router = () => {
  return (
    <BrowserRouter >
      
      <Route exact path="/" component={Home} />
      <PrivateRoute exact path="/dash/:id" component={Dash} />
      <PrivateRoute path='/path/create' component={CreatePath} exact />
      <PrivateRoute path='/path/:id' component={DetailsPath} exact />
      <PrivateRoute path='/topic/:id' component={ContentTopic} exact />
      <Route path='/login' component={Login} exact/>
      <Route path='/signup' component={Signup} exact/>
      <PrivateRoute path='/profile' component={Profile} exact />
      <Route path='/multimedia' component={Multimedia} exact />
      <Route path='/choose-donation' component={ChooseDonation}exact />
      <Route path='/donate100' component={Donate100} exact />
      <Route path='/donate200' component={Donate200} exact />
      <Route path='/donate300' component={Donate300} exact />
      <Route path='/donate400' component={Donate400} exact />
      <Route path='/progreso' component={Progreso} exact />
      <Route exact path="/success" component={Success} />
      <Route exact path="/failure" component={Failure} />
      <Route exact path="/pending" component={Pending} />
      
    {/*<Route component={NotFound} />*/}
    </BrowserRouter>
  )
}

export default Router
