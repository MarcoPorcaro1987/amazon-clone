import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from "@stripe/stripe-js"
import { Elements } from "@stripe/react-stripe-js"

const promise = loadStripe("pk_test_51L5tEMIyK2JzzkJzjSIAbaODghfEef3hUY9BaEiJTrQuRdRL2LYV7yOmxkOMwqeQmA0TciIKY6ehAOJbcjO0pYTn00UyC9MkXs");

function App() {
  const [{ }, dispatch] = useStateValue();

  useEffect(() => {
    //run once when the app component loads
    auth.onAuthStateChanged(authUser => {
      console.log(authUser);
      if (authUser) {
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //the user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
  }, [])

  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/checkout' element={[<Header />, <Checkout />]}></Route>
          <Route path='/' element={[<Header />, <Home />]}></Route>
          <Route path='/payment' element={[<Header />, <Elements stripe={promise}><Payment /></Elements>]}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
