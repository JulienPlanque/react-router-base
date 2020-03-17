import React from 'react';
import Accueil from './Accueil'
import Contact from './Contact'
import Projets from './Projets'
import Navigation from './Navigation'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';

function App() {
  return (
    <div className="App">
      <Router
        forceRefresh={true}>
        <Navigation />
        <Switch> {/* Permet de gérer les erreurs 404 */}
          <Route path="/" exact component={Accueil} />
          <Route path="/Projets" exact component={Projets} />
          <Route path="/Contact" exact component={Contact} />
          <Route path="/" component={() => <div>ERREUR 404</div>} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
