import React from 'react';
import './App.css';
import { Route, Link } from 'wouter';
import Home from './pages/Home'
import SearchResults from './pages/SearchResults';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'><h2>Logo - Inicio</h2></Link>
        <Route 
          component={Home}
          path='/'
        />
        <Route 
          component={SearchResults}
          path='/search/:keyword'
        />
      </section>
    </div>
  );
}

export default App;
