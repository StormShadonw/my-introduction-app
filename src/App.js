import logo from './logo.svg';
import { TodoList } from './Components/TodoList';
import { TodoSearch } from './Components/TodoSearch';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';
import React from 'react';
import { TodoCounter } from './Components/TodoCounter';

const defaultTodos = [
  {text: "Cortar cebolla", completed: true,},
  {text: "Completar platzi", completed: false,},
  {text: "Llorar con la llorona", completed: false,},
  {text: "Klk manito", completed: true,},
];

function App() {
  return (
    <>

      <TodoCounter completed={4} total={15} ></TodoCounter>

      <TodoSearch></TodoSearch>

      <TodoList>
        {defaultTodos.map(todo => (
        <TodoItem key={todo.text} text={todo.text} completed={todo.completed}></TodoItem>
        ))}
      </TodoList>

      <CreateTodoButton></CreateTodoButton>


    </>
  );
}



export default App;
