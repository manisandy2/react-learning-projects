function TodoForm({
  title,
  setTitle,
  handleSubmit,
}) {
  return (
    <form
      className="todo-form"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="What needs to be done?"
        value={title}
        onChange={(event) =>
          setTitle(event.target.value)
        }
      />

      <button type="submit">
        Add Todo
      </button>
    </form>
  );
}

export default TodoForm;