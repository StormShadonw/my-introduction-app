import React from 'react';
import { TodoCounter } from './Components/TodoCounter';
import { TodoSearch } from './Components/TodoSearch';
import { TodoList } from './Components/TodoList';
import { TodoItem } from './Components/TodoItem';
import { CreateTodoButton } from './Components/CreateTodoButton';
import { useLocalStorage } from './hooks/customHooks/useLocalStorage';
import { LoadingTodos } from './Components/LoadingTodos';
import { ErrorTodos } from './Components/ErrorTodos';
import { EmptyTodos } from './Components/EmptyTodos';




function App() {

  const {
    items: todos,
    saveItem: saveTodos, 
    loading, 
    error,
  } = useLocalStorage("TODOS_V1", []);

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
      <TodoCounter
      loading={loading}
      completed={completedTodos.length} total={todos.length} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <LoadingTodos />}
        {error && <ErrorTodos />}
        {(!loading && todos.length === 0) && <EmptyTodos />}
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
