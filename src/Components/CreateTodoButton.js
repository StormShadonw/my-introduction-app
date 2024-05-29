import './CreateTodoButton.css'

function CreateTodoButton() {
    return(
    <div className="createContainer">
        <h2>Crear nueva tarea</h2>
        <div className="formGroup">
            <label for="taskName">Nombre de la tarea</label>
            <input id="taskName" placeholder='Tengo que botar la basura'/>
        </div>
        <div className="actions">
            <button className="button" id="btnCreate">Agregar</button>
            <button className="button" id="btnCancel">Borrar</button>
        </div>
    </div>
    );
}

export {CreateTodoButton};