import React from 'react';
import './CreateTodoButton.css';
import { TodoContext } from '../TodoContext';
import { useNavigate } from 'react-router-dom';

function CreateTodoButton() {

  const {
    openModal,
    setOpenModal,
  } = React.useContext(TodoContext);

  const navigate = useNavigate();

  return (
    <button
      className="CreateTodoButton"
      onClick={
        (event) => {
          navigate('/new');
        }
      }
    >+</button>
  );
}

export { CreateTodoButton };
