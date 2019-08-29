import React, {Component} from 'react';
import './App.css';
import firebase from 'firebase';
import SignIn from './components/signIn/signIn';

firebase.initializeApp({
  apiKey:"AIzaSyDYeUiqtbWoyBHj1HOaxGOdzFirPongc6M",
  authDomain:"social-app-45b0e.firebaseapp.com"
});

class App extends Component{
  render() {
    return (
      <div className = "App">

        <div id = "Main-header-container">
          <header id = "Main-header"> <h1>Main Header</h1> </header>
        </div>

        <div id = "Main-content-container">
          <SignIn/> 
        </div>

        <div id = "Main-footer-container" >
          <footer id = "Main-footer"><h1>Main Footer</h1></footer>
        </div>

       </div>
     
    )
  }
}


export default App;
