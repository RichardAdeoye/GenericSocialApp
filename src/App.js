import React, {Component} from 'react';
import './App.css';
import firebase from 'firebase';
import MainHeader from './components/mainHeader/MainHeader';
import SignIn from './components/signIn/SignIn';
import MainFooter from './components/mainFooter/MainFooter';


firebase.initializeApp({
  apiKey:"AIzaSyDYeUiqtbWoyBHj1HOaxGOdzFirPongc6M",
  authDomain:"social-app-45b0e.firebaseapp.com"
});

class App extends Component{
  render() {
    return (
      <div className = "App">
          <MainHeader/>
          <SignIn/> 
          <MainFooter/>
       </div>
    )
  }
}

export default App;
