
import './App.css';
import Login from "./Login";
import Home from "./Home";
import Createaccount from './Createaccount';
import DailyLogs from './components/dailylogs/DailyLogs'
import Profile from './components/profile/Profile'
import About from './components/about/About'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React, {useEffect} from "react";
import {auth} from "./firebase"
import {useStateValue} from "./components/dailylogs/StateProvider";



function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER IS >>>', authUser);

      if (authUser)
      {
        // the user is logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      }
      else
      {
        // the user is logged out
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [])

  return (
    <Router>
      <div className = "app">
        <Routes>
          <Route exact path = "/"
            element = {<Login />}>
          </Route>
          <Route exact path = "/home"
            element = {<Home />}>
          </Route>
          <Route exact path = "/create-account"
            element = {<Createaccount />}>
          </Route>
          <Route exact path = "/daily-logs"
            element = {<DailyLogs />}>
          </Route>
          <Route exact path = "/profile"
            element = {<Profile/>}>
          </Route>
          <Route exact path = "/about-us"
            element = {<About/>}>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
