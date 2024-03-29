import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import {TodoList} from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';



const defaultTodos = [
  {text: "llamar a messi", completed:true},
  {text: "jugar  futbol", completed:false},
  {text: "jugar  dream", completed:false},
  {text: "jugar  futbol", completed:false}

];

function App() {
  return (
    <React.Fragment>
      <TodoCounter completed={5} total={8} />
      <TodoSearch />

      <TodoList/> 
        {defaultTodos.map(todo => (
          <TodoItem 
          key={todo.text} 
          text={todo.text} 
          completed={todo.completed}
          />
        ))}
      <TodoList/> 

      <CreateTodoButton/>
    </React.Fragment>
  );
}

export default App;
