import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

/*function MyList() {
  return (
    <ul>
      <li>Banana</li>
      <li>Orange</li>
      <li>Apple</li>
    </ul>
  )

}*/

function MyInfo() {
  return (
    <div class="block">
      <h1>Justin Zhang</h1>
      <p>Think and tinker are never ending. Immensed in infinite loop of learning.</p>
      <ol>
        <li>North America</li>
        <li>Europe</li>
        <li>Oceania</li>
      </ol>
    </div>
  )
}

ReactDOM.render(
  <MyInfo />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
