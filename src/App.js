import './App.css';
import Feed from './components/feed/feed';
import Menu from './components/menu/menu';
import Trend from './components/trend/trend';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Preferences from './components/Preferences/Preferences';
import React, { useState } from 'react';

const App = () => {
  const [token, setToken] = useState();
  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <>
    <div className='container main'>
       <Menu />
       <Feed />
       <Trend />
       <div className="wrapper">
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
            <Route path="/login">
          <Login></Login>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
    </div>
    </>
  );
}

export default App;
