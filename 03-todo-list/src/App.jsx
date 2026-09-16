import { useEffect, useState } from "react";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import "./App.css";

function App() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem("todos");

    return savedTodos
      ? JSON.parse(savedTodos)
      : [];
  });

  const [title, setTitle] = useState("");
  const [filter, setFilter] = useState("all");

  // Save todos to LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }, [todos]);

  // Add Todo
  const handleSubmit = (event) => {
    event.preventDefault();

    if (title.trim() === "") {
      return;
    }

    const newTodo = {
      id: Date.now(),
      title: title.trim(),
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
  };

  // Toggle Todo
  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }

        return todo;
      })
    );
  };

  // Delete Todo
  const handleDelete = (id) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this todo?"
    );

    if (!confirmed) {
      return;
    }

    setTodos(
      todos.filter((todo) => todo.id !== id)
    );
  };

  // Clear Completed Todos
  const handleClearCompleted = () => {
    setTodos(
      todos.filter((todo) => !todo.completed)
    );
  };

  // Filter Todos
  const filteredTodos = todos.filter((todo) => {
    if (filter === "active") {
      return !todo.completed;
    }

    if (filter === "completed") {
      return todo.completed;
    }

    return true;
  });

  // Todo Counts
  const totalCount = todos.length;

  const activeCount = todos.filter(
    (todo) => !todo.completed
  ).length;

  const completedCount = todos.filter(
    (todo) => todo.completed
  ).length;

  return (
    <div className="app">
      <div className="todo-container">

        <h1>Todo List</h1>

        {/* Add Todo */}
        <TodoForm
          title={title}
          setTitle={setTitle}
          handleSubmit={handleSubmit}
        />

        {/* Statistics */}
        <div className="stats">
          <div className="stat">
            <span className="stat-number">
              {totalCount}
            </span>

            <span className="stat-label">
              Total
            </span>
          </div>

          <div className="stat">
            <span className="stat-number">
              {activeCount}
            </span>

            <span className="stat-label">
              Active
            </span>
          </div>

          <div className="stat">
            <span className="stat-number">
              {completedCount}
            </span>

            <span className="stat-label">
              Completed
            </span>
          </div>
        </div>

        {/* Filters */}
        <div className="filter-section">

          <div className="filters">

            <button
              className={
                filter === "all" ? "active" : ""
              }
              onClick={() => setFilter("all")}
            >
              All
            </button>

            <button
              className={
                filter === "active" ? "active" : ""
              }
              onClick={() => setFilter("active")}
            >
              Active
            </button>

            <button
              className={
                filter === "completed"
                  ? "active"
                  : ""
              }
              onClick={() => setFilter("completed")}
            >
              Completed
            </button>

          </div>

          {/* Clear Completed */}
          {completedCount > 0 && (
            <button
              className="clear-button"
              onClick={handleClearCompleted}
            >
              Clear Completed
            </button>
          )}

        </div>

        {/* Todo List */}
        <TodoList
          todos={filteredTodos}
          filter={filter}
          handleToggle={handleToggle}
          handleDelete={handleDelete}
        />

      </div>
    </div>
  );
}

export default App;