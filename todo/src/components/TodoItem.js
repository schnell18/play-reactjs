import React from 'react';

// functional component
/*
function TodoItem(props) {
  return (
      <div className="todo-item">
        <input type="checkbox" checked={props.item.completed}></input>
        <p>{props.item.name}</p>
      </div>
  );
}*/

// class component
class TodoItem extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    this.state.item = this.props.item
    return (
        <div className="todo-item">
          <input type="checkbox" checked={this.state.item.completed}></input>
          <p>{this.state.item.name}</p>
        </div>
    );
  }
}

export default TodoItem;
