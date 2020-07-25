import React, { Component } from 'react';
import './App.css';
import './components/TodoItem';
import TodoItem from './components/TodoItem';
import taskData from './tasks';

class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: taskData
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(id) {
    this.setState(pre => {
      console.log("Pre", pre.todos)
      const newTaskData = pre.todos.map(task => {
        if (task.id === id) {
          task.completed = !task.completed
        }
        return task
      })
      console.log("New", newTaskData)
      return {
        todos: newTaskData
      }
    })
  }

  render() {
    return (
      <div className="todo-list">
        {this.state.todos.map(task => <TodoItem key={task.id} item={task} handleChange={this.handleChange}/>)}
      </div>
    );

  }
}

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
