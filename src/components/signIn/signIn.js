import React, {Component} from 'react';
import firebase from 'firebase';
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

class SignIn extends Component{
    state = { isSignedIn : false }
    uiConfig = {
      signInFlow: "popup", //redirect option
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      callbacks: {
        signInSuccess: () => false
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
        <div className="SignIn">
          {this.state.isSignedIn ? (
            <span>
              <div>Signed In</div> 
              <button onClick={() => firebase.auth().signOut()}>Sign out!</button>
              <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
              <img alt="social img" src={firebase.auth().currentUser.photoURL}/>
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