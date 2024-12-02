import React from 'react';
import './TodoForm.css';
import { TodoContext } from '../TodoContext';

function TodoForm() {

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

  return (
    <form onSubmit={(event) => {
        event.preventDefault();
        addTodo(document.getElementById('TodoValue').value);
        document.getElementById('TodoValue').value = '';
        setOpenModal(false);
    }}>
        <h2>Escribe tu nuevo TODO</h2>
        <textarea placeholder='Escribe aquí tu nuevo TODO' id='TodoValue'></textarea>
        <div className='TodoFormButtons'>
        <button onClick={() => setOpenModal(false)}
        className='TodoFormButton TodoFormCancelButton'>Cancelar</button>
        <button className='TodoFormButton TodoFormCreateButton'>Crear</button>
        </div>

    </form>
  );
}

export { TodoForm };