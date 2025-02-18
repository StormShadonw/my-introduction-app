import React from "react";
import { TodoForm } from "../Components/TodoForm";
import { Modal } from "../Components/Modal";

function NewPage() {
  return (
    <TodoForm todoId={0}/>
  );
}

export { NewPage };