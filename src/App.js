import React, { createContext, useState } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/MainPage/Home';
import NotFound from './components/NotFound/NotFound';
import Login from './components/LoginPage/Login';
import RegForm from './components/RegistrationPage/RegForm';
import UserReg from './components/RegistrationPage/UserReg';
import AdminRegister from './components/AdminPage/AdminRegister';
import AdminEvent from './components/AdminPage/AdminEvent';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute path="/regForm/:eventTitle">
              <RegForm />
            </PrivateRoute>
            <PrivateRoute path="/userReg">
              <UserReg />
            </PrivateRoute>
            <PrivateRoute path="/adminRegister">
              <AdminRegister />
            </PrivateRoute>
            <PrivateRoute path="/adminEvent">
              <AdminEvent />
            </PrivateRoute>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;

