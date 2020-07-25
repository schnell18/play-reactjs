import React from 'react';
import './App.css';
import './components/TodoItem';
import TodoItem from './components/TodoItem';

function App() {
  return (
    <div className="todo-list">
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
      <TodoItem/>
    </div>
  );
}

/*const App = () => {
  return (
    <div className="App">
      <input type="checkbox"></input><p>Todo item1</p>
      <input type="checkbox"></input><p>Todo item2</p>
      <input type="checkbox"></input><p>Todo item3</p>
      <input type="checkbox"></input><p>Todo item4</p>
    </div>
  );
}*/

/*function App() {
  const date = new Date()
  const hours = date.getHours()
  let timeOfDay

  const styles = {
    color: "#FF8C00",
    //backgroundColor: "#FF2D00",
    fontSize: "5em"
  }

  if (hours < 12) {
    timeOfDay = "Morning"
    styles.color = "#04756F"
  }
  else if (hours >= 12 && hours < 17) {
    timeOfDay = "Afternoon"
    styles.color = "#8914A3"
  }
  else {
    timeOfDay = "night"
    styles.color = "#D90000"
  }

  return (
    <h1 style={styles}>Good {timeOfDay}({date.toTimeString()})!</h1>
  )
}*/

export default App;
