import './TodoItem.css';
import {AiOutlineCheck, AiOutlineClose, AiOutlineEdit} from 'react-icons/ai';


function TodoItem(props) {
  return (
    <li className="TodoItem">
      {/* <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={() => props.onComplete()}>
        V
      </span> */}
      <AiOutlineCheck onClick={() => props.onComplete()} className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} />

      <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>
        {props.text}
      </p>
      <AiOutlineEdit onClick={() => props.onEdit()} className="Icon Icon-edit" />
      {/* <span className="Icon Icon-delete" onClick={() => props.onDelete()}>
        X
      </span> */}
      <AiOutlineClose onClick={() => props.onDelete()} className="Icon Icon-delete" />
    </li>
  );
}

export { TodoItem };