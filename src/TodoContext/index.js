import React from 'react';
import { useLocalStorage } from '../hooks/customHooks/useLocalStorage';

const TodoContext = React.createContext();

function TodoProvider({children}) {

    const {
        items: todos,
        saveItem: saveTodos, 
        loading, 
        error,
      } = useLocalStorage("TODOS_V3", []);
    
      const [searchValue, setSearchValue] = React.useState('');

      const [openModal, setOpenModal] = React.useState(false);
    
      const completedTodos = todos.filter(todo => todo.completed);
    
    
      const deleteTodo = (id) => {
        todos.splice(todos.findIndex(todo => todo.id === id), 1);
        saveTodos([...todos]);
      }

      const addTodo = (text) => {
        const id = generateId();
      todos.push({id, text, completed: false});
        saveTodos([...todos]);
      }

      const editTodo = (todoId, text) => {
        const todo = todos.find(todo => todo.id === todoId);
        todo.text = text;
        saveTodos([...todos]);
      }
    
      const completeTodo = (id) => {
        const todo = todos.find(todo => todo.id === id);
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
        editTodo,
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

function generateId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

export {TodoContext, TodoProvider};