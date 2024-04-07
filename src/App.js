<<<<<<< HEAD
import React from 'react';
=======

>>>>>>> 800ef48877d6fa9b73c821bd485cc0df8edcf288
import './App.css';
import Navbar from './components/Navbar';
import Products from './components/Products';
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Carts from './components/Carts';





function App() {
  const [darkmode, setdarkmode] = useState(false);

  const toggle = () => {
    document.body.style.backgroundImage = 'url("https://www.transparenttextures.com/patterns/wood-pattern.png")';
    if (darkmode === false) {
      console.log("darkmode");
      document.body.style.backgroundColor = "#1f1203";
      setdarkmode(true);
    }
    else {
      console.log("lightmode");
      document.body.style.backgroundColor = "#5c5635";
      setdarkmode(false);
    }

  }

  document.title = "BlinkBay : Shop, Explore, Enjoy, Repeat";

  return (
    <div>

      <Navbar toggle={toggle} />



      <Router>
        <Switch>
          <Route exact path="/home"><Products toggle={toggle} darkmode={darkmode} category={false} /></Route>
          <Route exact path="/"><Products toggle={toggle} darkmode={darkmode} category={false} /></Route>
          <Route exact path="/electronics"><Products key="electronics" toggle={toggle} darkmode={darkmode} category='electronics' /></Route>
          <Route exact path="/men's clothing"><Products key="men's clothing" toggle={toggle} darkmode={darkmode} category="men's clothing" /></Route>
          <Route exact path="/women's clothing"><Products key="women's clothing" toggle={toggle} darkmode={darkmode} category="women's clothing" /></Route>
          <Route exact path="/jewelery"><Products key="jewelery" toggle={toggle} darkmode={darkmode} category="jewelery" /></Route>
          <Route exact path="/carts"><Carts darkmode={darkmode} /></Route>



        </Switch>
      </Router>

    </div>
  );
}

export default App;
