import React, { useReducer, useState } from "react";
import { reducer, initialState } from "../reducers/reducer";
import Todo from "./Todo";

const TodoForm = () => {

  const [state, dispatch] = useReducer(reducer, initialState);
  const [todo, setTodo] = useState("");

  const handleChange = event => {
    setTodo(event.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch({ type: "ADD-TODO", payload: todo });
  };

  const reset = e => {
    e.preventDefault();
    dispatch({ type: "REMOVE", payload: todo });
  };

  const clear = e => {
       e.preventDefault();
       const confirmed = window.confirm("are you sure you want to remove all items?");
        if(confirmed === true){
           dispatch({type: "CLEAR", payload: todo})
        } else{
            alert("Okay, we'll keep what you have")
        }
     
     
  }

 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name='todo'
          type='text'
          placeholder="Add Todo"
          value={todo}
          onChange={handleChange}></input>
        <button>Add</button>
        <button onClick={reset}>Delete</button>
        <button onClick={clear}>Clear All</button>
      </form>
      <Todo id={state.id}  dispatch={dispatch} state={state} todo={todo} />
    </div>
  );
};

export default TodoForm;