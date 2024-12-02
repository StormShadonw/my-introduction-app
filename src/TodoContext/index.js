import React from 'react';
import { useLocalStorage } from '../hooks/customHooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({children}) {

    const {
        items: todos,
        saveItem: saveTodos, 
        loading, 
        error,
      } = useLocalStorage("TODOS_V1", []);
    
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => todo.completed);
    
    
      const deleteTodo = (text) => {
        todos.splice(todos.findIndex(todo => todo.text === text), 1);
        saveTodos([...todos]);
      }

      const addTodo = (text) => {
        todos.push({text, completed: false});
        saveTodos([...todos]);
      }
    
      const completeTodo = (text) => {
        const todo = todos.find(todo => todo.text === text);
        todo.completed = !todo.completed;
        saveTodos([...todos]);
    
      }

  return (
    <TodoContext.Provider value={{
        loading,
        error,
        todos,
        completedTodos,
        searchValue,
        setSearchValue,
        addTodo,
        saveTodos,
        deleteTodo,
        completeTodo,
        openModal,
        setOpenModal,
    }}>
      {children}
    </TodoContext.Provider>
  );
}

export {TodoContext, TodoProvider};