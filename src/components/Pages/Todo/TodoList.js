import { MdDone, MdDelete} from 'react-icons/md';

// ()=>     fat arrow functions  funciones de flecha gorda ;

function TodoListItem({descripcion, id, fb_id, completed, doneHandler, deleteHandler}){
  const onClick = (e)=>{
    doneHandler(fb_id);
  }
  const onDeleteClick = (e)=>{
    deleteHandler(fb_id);
  }

  const styles = {
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    padding: "1rem",
    borderBottom: "",
    justifyContent: "space-between",
    alingItems: "Center,"
  }

  const myClass = (completed)?"striked": "";
  return (
    <li>
    <span className={myClass}>{descripcion}</span>
    <MdDone onClick={onClick}></MdDone>
    <MdDelete onClick={onDeleteClick}></MdDelete>
  </li>);
}

function TodoList({todos, doneHandler, deleteHandler}){
  const todoItems = todos.map((o)=>{
    return (
      <TodoListItem
        key={o.doneHandlerid}
        descripcion={o.description}
        id={o.id}
        fb_id={o.fb_id}
        completed={o.completed}
        doneHandler={doneHandler}
        deleteHandler={deleteHandler}
      />
    )
  });
  return (
    <section className="TodoList">
      <ul>
         {todoItems}
      </ul>
    </section>
  );
}

export default TodoList;
