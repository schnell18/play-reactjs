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
  render() {
    const props = this.props
    return (
        <div className="todo-item">
          <input type="checkbox" checked={props.item.completed}></input>
          <p>{props.item.name}</p>
        </div>
    );
  }
}

export default TodoItem;
