import React from 'react';

// functional component
function TodoItem(props) {
  return (
      <div className="todo-item">
        <input
          type="checkbox"
          checked={props.item.completed}
          onChange={() => props.handleChange(props.item.id)}
        />
        <p>{props.item.name}</p>
      </div>
  );
}

// class component
/*class TodoItem extends React.Component {

  render() {
    return (
        <div className="todo-item">
          <input
            type="checkbox"
            checked={this.props.item.completed}
            onChange={() => this.props.handleChange(this.props.item.id)}
          />
          <p>{this.props.item.name}</p>
        </div>
    );
  }
}*/

export default TodoItem;
