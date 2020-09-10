import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from './firebase';
import { Fade } from "react-awesome-reveal";


const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password)
    .then(auth => {
      // console.log(auth);
      history.push('/');
    })
    .catch(error => alert(error));
  }

  const register = e => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
    .then((auth) => {
      // console.log(auth);
      if (auth) {
        history.push('/');
      }
    })
    .catch(error => alert(error));
  }

  return (
    <div className="login">
      <Fade
        cascade
        fraction={0.2}
        duration={500}
        damping={0}
        delay={100}
        className="login__container"
      >
        <div>
          <Link to="/">
            <img
              className="login__logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
              alt="Login Logo"  
            />
          </Link>

          <h2>Sign-in</h2>
          <form>
            <h5>E-mail</h5>
            <input
              type="text"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />

            <h5>Password</h5>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />

            <button
              className="login__signinButton"
              onClick={signIn}
            >
              Sign In
            </button>
          </form>

          <p>By signing-in you agree to the AMAZON FAKE CLONE Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</p>

          <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
        </div>
      </Fade>
    </div>
  )
}


export default Login;
