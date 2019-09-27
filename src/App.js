import React, {Component} from 'react';
import './App.css';
import firebase from 'firebase';
import MainHeader from './components/main-Header/MainHeader';
import SignIn from './components/sign-In/SignIn';
import TrackerMap from './components/tracker-Map/TrackerMap';
import MainFooter from './components/main-Footer/MainFooter';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

firebase.initializeApp({
  apiKey:"AIzaSyAjTx4Br5zjkXVtGW6WzQEJEO63UbMdWTs",
  authDomain:"social-app-45b0e.firebaseapp.com"
});

class App extends Component{
  render() {
    return (
      <Router>
         <div className = "App">
          <MainHeader/>
          <Switch>
            <Route path ="/" exact component ={SignIn} /> 
            <Route path ="/tracker" exact component ={TrackerMap} /> 
          </Switch>
          <MainFooter/>
       </div>
      </Router>
    )
  }
}

export default App;
