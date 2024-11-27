import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el Curso de Intro a React.js', completed: false },
  { text: 'Llorar con la Llorona', completed: false },
  { text: 'LALALALALA', completed: false },
];

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <>
      <TodoCounter completed={16} total={25} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {defaultTodos.map(todo => { 
          if (searchValue === "" || todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) { 
        return (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
          />
        );
      } else {
        return null;
      }
      }
        )}
      </TodoList>
      
      <CreateTodoButton />
    </>
  );
}

export default App;
