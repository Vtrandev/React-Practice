import "./Todo.css";

function Todo({title, todoDelete}) {

  return (
    <div className="todo">
      <p>{title}</p>
      <button onClick={todoDelete}>Delete</button>
    </div>
  )
}

export default Todo;
