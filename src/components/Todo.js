import React from 'react';
import '../components/Todo.css';
const Todo = (props) => {
console.log(props);
    const ToggleCompleted = (id) => {
        props.dispatch({ type: "COMPLETED", id: id })
    }

    return (
      <div>
        {props.state.map(todo => {
          return (
            <div className={`item${todo.completed ? " completed" : ""}`} onClick={() => ToggleCompleted(todo.id)} key={todo.id}>
              <p>{todo.item}</p>
            </div>
                ) 
            })}
        </div>
    );
}

export default Todo;  