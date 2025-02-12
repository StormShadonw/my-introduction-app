import React from 'react';
import { TodoCounter } from './../Components/TodoCounter';
import { TodoSearch } from './../Components/TodoSearch';
import { TodoList } from './../Components/TodoList';
import { TodoItem } from './../Components/TodoItem';
import { CreateTodoButton } from './../Components/CreateTodoButton';
import { useLocalStorage } from './../hooks/customHooks/useLocalStorage';
import { LoadingTodos } from './../Components/LoadingTodos';
import { ErrorTodos } from './../Components/ErrorTodos';
import { EmptyTodos } from './../Components/EmptyTodos';
import { TodoContext, TodoProvider } from './../TodoContext';
import { Modal } from './../Components/Modal';
import { TodoForm } from './../Components/TodoForm';


function HomePage() {


    const {
        loading,
        error,
        todos,
        completedTodos,
        searchValue,
        setSearchValue,
        saveTodos,
        deleteTodo,
        completeTodo,
        openModal,
        setOpenModal,
      } = React.useContext(TodoContext);

    return(
        <>
        <TodoCounter />
        <TodoSearch />
                <TodoList>
                {loading && <LoadingTodos />}
                {error && <ErrorTodos />}
                {(!loading && todos.length === 0) && <EmptyTodos />}
                {todos.map(todo => { 
                  if (searchValue === "" || todo.text.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())) { 
                return (
                  <TodoItem
                    key={todo.id}
                    text={todo.text}
                    completed={todo.completed}
                    setTodos={saveTodos}
                    onDelete={() => deleteTodo(todo.id)}
                    onComplete={() => completeTodo(todo.id)}
                  />
                );
              } else {
                return null;
              }
              }
                )}
              </TodoList>
  
        
        <CreateTodoButton />
        {openModal && (
                <Modal>
                  <TodoForm />
                </Modal>
        )}
        </>
    )
}

export { HomePage };