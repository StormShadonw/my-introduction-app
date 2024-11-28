import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el Curso de Intro a React.js', completed: false },
//   { text: 'Llorar con la Llorona', completed: false },
//   { text: 'LALALALALA', completed: false },
// ];

// localStorage.setItem('TODOS_V1', defaultTodos);
// localStorage.removeItem('TODOS_V1');

function useLocalStorage(localStorageKey, initialValue) {


  let parsedItems = [];
  var localStorageItems = localStorage.getItem(localStorageKey);
  if(!localStorageItems) {
    localStorage.setItem(localStorageKey, JSON.stringify(initialValue));
    parsedItems = initialValue;
  } else {
    parsedItems = JSON.parse(localStorageItems);
  }

  const [items, setItem] = React.useState(parsedItems);


  const saveItem = (newItems) => {
    var json = JSON.stringify(newItems);
    setItem(newItems);
    localStorage.setItem(localStorageKey, json);
  }

  return [items, saveItem];
}

function App() {

  const [todos, saveTodos] = useLocalStorage("TODOS_V1", []);
  const [searchValue, setSearchValue] = React.useState('');

  const completedTodos = todos.filter(todo => todo.completed);


  const deleteTodo = (text) => {
    todos.splice(todos.findIndex(todo => todo.text === text), 1);
    saveTodos([...todos]);
  }

  const completeTodo = (text) => {
    const todo = todos.find(todo => todo.text === text);
    todo.completed = !todo.completed;
    saveTodos([...todos]);

  }

  return (
    <>
      <TodoCounter completed={completedTodos.length} total={todos.length} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {todos.map(todo => { 
          if (searchValue === "" || todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) { 
        return (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            setTodos={saveTodos}
            onDelete={() => deleteTodo(todo.text)}
            onComplete={() => completeTodo(todo.text)}
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
