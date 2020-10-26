import { Button } from '@material-ui/core'
import React from 'react'
import { auth, provider } from './firebase'
import "./Login.css"
function Login() {
    const signIn = () =>{
        //do clever google login shizzzz......
        auth.signInWithPopup(provider)
        .catch((error)=>alert(error.message));
    }
    return (
      <div className="login">
        <div className="login__logo">
          <img
            src="https://logovtor.com/wp-content/uploads/2020/07/discord-logo-vector.png"
            alt=""
          />
        </div>
        <Button onClick={signIn}>Sign In</Button>
      </div>
    );
}

export default Login
