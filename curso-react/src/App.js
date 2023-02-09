import React from 'react';
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import { Route, Link } from 'wouter';

function App() {
  return (
    <div className="App">
      <section className="App-content">
        <h2>App</h2>
        <Link to='/gif/pandas'>Pandas</Link>
        <Link to='/gif/leones'>Leones</Link>
        <Link to='/gif/tigres'>Tigres</Link>
        <Route 
          component={ListOfGifs}
          path='/gif/:keyword'
        />
      </section>
    </div>
  );
}

export default App;
