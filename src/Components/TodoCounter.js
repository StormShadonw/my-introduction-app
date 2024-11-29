import './TodoCounter.css';

function TodoCounter({ total, completed }) {
  if(total === completed) {
    return (
      <h1 className="TodoCounter">
        <span>¡Felicidades! Has completado todos los TODOs</span>
      </h1>
    );
  }
  return (
    <h1 className="TodoCounter">
      Has completado <span>{completed}</span> de <span>{total}</span> TODOs
    </h1>
  );
}

export { TodoCounter };
