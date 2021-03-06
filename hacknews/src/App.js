import React, { Component } from 'react';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 40,
    objectId: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectId: 1,
  },
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: list
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.items.map(item =>
            <div key={item.objectId}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </div>
          )
        }
      </div>
    );
  }
}

// function App() {
//   const hello = 'Welcome to world of ReactJS';
//   return (
//     <div className="App">
//       <h2>{hello}</h2>
//     </div>
//   );
// }

export default App;
