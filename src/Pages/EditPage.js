import React from "react";
import { TodoForm } from "../Components/TodoForm";
import { useParams } from "react-router-dom";

function EditPage() {
  const params = useParams();
  return (
    <TodoForm todoId={params.id}/>
  );
}

export { EditPage };