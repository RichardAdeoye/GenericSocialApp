import React, {Component} from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import './SignIn.css';

class SignIn extends Component{
    state = { isSignedIn : false }
    uiConfig = {
      signInFlow: "popup", //redirect option
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccessWithAuthResult: () => false
      }
    }
  
    componentDidMount = ()=>{
      firebase.auth().onAuthStateChanged(user =>{
        this.setState({isSignedIn : !!user})
        console.log("user",  user)
      })
    }
   
    render() {
      return (
        <div className="signIn">
          {this.state.isSignedIn ? (
            <span>
              <div>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <img className = "profile-image" alt="social img" src={firebase.auth().currentUser.photoURL}/>
              </div>
              <div>
              <button className = "sign-out" onClick={() => firebase.auth().signOut()}>Sign out!</button>
              </div>
            </span>
            
       ) : ( 
            <StyledFirebaseAuth
              uiConfig={this.uiConfig}
              firebaseAuth={firebase.auth()}
            />
       )}
        </div>
      )
    }
  }
  
  
  export default SignIn;