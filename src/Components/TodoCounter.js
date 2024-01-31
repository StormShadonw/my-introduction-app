import "./TodoCounter.css";

function TodoCounter({total, completed}) {
    return(<h1>
        Has completado {completed} de {total} todos.
    </h1>);
}

export {TodoCounter};