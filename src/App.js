import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Checkout from './Checkout';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [ ,dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log('THE USER IS =>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      } 
    })
  }, [dispatch])

  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}


export default App;
