import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import Orders from './Orders';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';


const promise = loadStripe(
  'pk_test_51HPvU6IJFOeNWSL0IlstsdlQxiBg73W7MWbkWmBs9dcOT4HaxgnXyEpcqbQKcWKxXeRljT6xvGHgHYueqFMbyxRF00w01Pdgw2'
);

function App() {
  const [ , dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log('THE USER IS =>', authUser);

      if (authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        });
      } 
    })
  }, [dispatch])

  return (
    <Router>
      <div className="app">

        <Switch>
          <Route path="/orders">
            <Header />
            <Orders />
            <Footer />
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
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
