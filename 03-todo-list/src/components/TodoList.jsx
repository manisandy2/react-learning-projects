import TodoItem from "./TodoItem";

function TodoList({
  todos,
  filter,
  handleToggle,
  handleDelete,
}) {
  if (todos.length === 0) {
    let message = "Add a new todo to get started.";

    if (filter === "active") {
      message = "You have no active todos.";
    }

    if (filter === "completed") {
      message = "You have no completed todos.";
    }

    return (
      <div className="empty-state">
        <div className="empty-icon">
          📝
        </div>

        <h2>No todos found</h2>

        <p>{message}</p>
      </div>
    );
  }

  return (
    <div className="todo-list">
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default TodoList;