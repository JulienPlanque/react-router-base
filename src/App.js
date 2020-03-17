import React from 'react';
import Accueil from './Accueil'
import Contact from './Contact'
import Projets from './Projets'
import Navigation from './Navigation'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
      <Navigation />
        <Route path="/" exact component={Accueil} />
        <Route path="/Projets" exact component={Projets} />
        <Route path="/Contact" exact component={Contact} />

      </Router>
    </div>
  );
}

export default App;
