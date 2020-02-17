import React, {useReducer} from 'react';
import './App.css';
import TodoList from './components/TodoList';
import TodoForm from './components/TodoForm';
import { reducer, initialState } from './reducers/reducer';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="App">
    <TodoForm />
    <TodoList />
    </div>
  );
}

export default App;