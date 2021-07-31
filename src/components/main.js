import React from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from './nav.js';
import Home from './home.js';
import About from'./about.js';
import Footer from './footer.js'
import Recipes from "./recipes.js";

export default function Main() {
    
    return(
    <Router>
    <Nav/>
    <Switch>
        <Route path="/home">
            <Home 
            title="Cooking is Fun"
            text="Lorem ex minim deserunt proident cillum nulla amet quis aliquip eiusmod nulla."/>
        </Route>
        <Route path="/about">
            <About/>
        </Route>
        <Route path="/recipes">
            <Recipes/>
        </Route>
      </Switch>
      <Footer/>
      </Router>
    );
}