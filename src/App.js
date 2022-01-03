import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import './App.css'
import Estadistica from './components/estadistica/estadistica';
import Formulario from "./components/formulario/formulario";
import Sidebar from './components/Sidebar/Sidebar'

export const sideBarObject = {
  header: 'URL Shortener',
  avatar: 'http://link-butcher-2.herokuapp.com/MDE2YzE2',
  routeTree: [
    {
      children: [
        { name: 'Inicio', route: '/dashboard/r' },
        { name: 'Estadistica', route: '/dashboard/o' },
        { name: 'Formulario', route: '/dashboard/f' },
      ],
      icon: 'home',
      name: 'Menu',
    },
   
    
  ],
}

function RouteDemo({ children }) {
  return <div className="routeDemo">{`You are here > ${children}`}</div>
}

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/" component={Login}></Route>
      </Switch>
    </div>
  )
}

function Login() {
  return <Link to="/dashboard">Click here to Login</Link>
}

function Dashboard({ match }) {
  return (
    <div>
      <div>
        <Sidebar
          sideBarObject={sideBarObject}
          initialRoute={window.location.pathname}
        ></Sidebar>
      </div>
      <Switch>
        <Route path={match.url + '/o'}
        // component={Estadistica}
        >
          
        </Route>

        <Route path={match.url + '/f'}
        component={Formulario}>
 
        </Route>
        <Route path={match.url + '/'}>
          <RouteDemo>Home</RouteDemo>
        </Route>
      </Switch>
    </div>
  )
}
export default App
