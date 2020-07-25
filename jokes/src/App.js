import React from 'react';
import './App.css';
import Joke from './components/Joke'
import jokeData from './jokesData';

function App() {
  // const jokeComponents = jokeData.map(joke => <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)
  return (
    <div className="App">
      {
        jokeData.map(joke =>
          <Joke key={joke.id} question={joke.question} punchLine={joke.punchLine}/>)
      }
    </div>
  );
}

export default App;
