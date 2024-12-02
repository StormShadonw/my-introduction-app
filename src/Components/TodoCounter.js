import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import './TodoCounter.css';
import React from 'react';
import { TodoContext } from '../TodoContext';

function TodoCounter() {
  
const {
  loading,
  todos,
  completedTodos,
} = React.useContext(TodoContext);


  if(loading) {
    return (
      <div className='LoadingTodoCounter'>
        <Skeleton height={28} />
        </div>
    );
  }
  if(todos.length == 0) {
    return (
      <h1 className="TodoCounter">
        <span>No hay TODOs</span>
      </h1>
    );
  }
  if(todos.length === completedTodos.length) {
    return (
      <h1 className="TodoCounter">
        <span>¡Felicidades! Has completado todos los TODOs</span>
      </h1>
    );
  }
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completedTodos.length}</span> de <span>{todos.length}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
