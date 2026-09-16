function TodoItem({
  todo,
  handleToggle,
  handleDelete,
}) {
  return (
    <div
      className={`todo-item ${
        todo.completed ? "completed" : ""
      }`}
    >
      <button
        className="todo-check"
        onClick={() => handleToggle(todo.id)}
        aria-label={
          todo.completed
            ? "Mark todo as active"
            : "Mark todo as completed"
        }
      >
        {todo.completed ? "✓" : ""}
      </button>

      <span className="todo-title">
        {todo.title}
      </span>

      <button
        className="delete-button"
        onClick={() => handleDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default TodoItem;