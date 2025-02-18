import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';
import { useNavigate } from 'react-router-dom';

function TodoForm({ todoId }) {
  
  const isEditMode = todoId !== 0;

  const navigate = useNavigate();

    const {
        addTodo,
        editTodo,
    } = React.useContext(TodoContext);

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        if(!isEditMode) {
          addTodo(document.getElementById('TodoValue').value);
          document.getElementById('TodoValue').value = '';
        } else {
          editTodo(todoId, document.getElementById('TodoValue').value);
          document.getElementById('TodoValue').value = '';
        }

        navigate("/");
    }}>
        <h2>{!isEditMode ? "Escribe tu nuevo TODO" : "Edita tu TODO"}</h2>
        <textarea placeholder='Escribe aquí tu nuevo TODO' id='TodoValue'></textarea>
        <div className='TodoFormButtons'>
        <button onClick={() => navigate("/")}
        className='TodoFormButton TodoFormCancelButton'>Cancelar</button>
        <button className='TodoFormButton TodoFormCreateButton'>{!isEditMode ? "Crear" : "Editar"}</button>
        </div>

    </form>
  );
}

export { TodoForm };