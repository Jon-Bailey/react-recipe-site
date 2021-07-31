import React from "react";
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';
import Nav from './nav.js';
import Home from './home.js';
import Footer from './footer.js'

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
        <Route path="/recipes">
            <h1>Recipes</h1>
        </Route>
      </Switch>
      <Footer/>
      </Router>
    );
}