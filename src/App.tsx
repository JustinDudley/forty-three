import React from 'react';
import './App.css';
import { AppChild } from './AppChild';

const App = () =>
//  {
  // return (
    <div className="App" /* for CSS */>
      <header className="Who-i-am" /* for CSS */>
        <p>
          Justin Dudley, 
          43quintillionaire
        </p>
        <a
          className="App-link"
          href="https://pure-beach-45405.herokuapp.com/"
          target="_blank"
          rel="noopener noreferrer"
        > My other website is a...        
        </a>
        <AppChild />
      </header>
    </div>
    // )
// };
  

export default App;
