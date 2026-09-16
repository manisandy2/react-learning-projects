# 📝 Todo List — React Learning Project 03

A Todo List application built with **React + Vite** as part of a progressive React learning project series.

The project focuses on React fundamentals including state management, forms, events, props, components, array methods, conditional rendering, `useEffect`, LocalStorage, and responsive CSS.

---

## 📌 Project Information

| Item           | Details              |
| -------------- | -------------------- |
| Project        | Todo List            |
| Project Number | 03                   |
| Level          | Basic → Intermediate |
| Frontend       | React                |
| Build Tool     | Vite                 |
| Language       | JavaScript           |
| Styling        | CSS                  |
| Storage        | Browser LocalStorage |

---

## 🎯 Features

* Add new todos
* Prevent empty todos
* Add todo using Enter key
* Mark todos as completed
* Unmark completed todos
* Delete todos
* Delete confirmation
* Filter by All / Active / Completed
* Display Total / Active / Completed counts
* Clear all completed todos
* Empty-state messages
* LocalStorage persistence
* Responsive mobile layout

---

## 🛠️ Technologies

* React
* JavaScript
* Vite
* HTML
* CSS
* LocalStorage

---

## 📁 Project Structure

```text
03-todo-list/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── TodoForm.jsx
│   │   ├── TodoItem.jsx
│   │   └── TodoList.jsx
│   │
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── .gitignore
├── index.html
├── package.json
├── package-lock.json
└── README.md
```

---

# 📚 React Concepts Learned

## 01. Project Setup

* Vite
* React project structure
* Development server

Status: ✅

---

## 02. `useState`

Used `useState` for:

```text
todos
title
filter
```

Status: ✅

---

## 03. Events

Learned:

```text
onClick
onChange
onSubmit
```

Status: ✅

---

## 04. Controlled Input

The input value is controlled by React state:

```jsx
<input
  value={title}
  onChange={(event) =>
    setTitle(event.target.value)
  }
/>
```

Status: ✅

---

## 05. Forms

Used a React form to add todos:

```jsx
<form onSubmit={handleSubmit}>
```

Status: ✅

---

## 06. Array `.map()`

Used `.map()` to render todo items:

```jsx
{todos.map((todo) => (
  <TodoItem
    key={todo.id}
    todo={todo}
  />
))}
```

Status: ✅

---

## 07. Array `.filter()`

Used `.filter()` for:

* Delete
* Active todos
* Completed todos
* Clear completed

Example:

```javascript
todos.filter(
  (todo) => todo.id !== id
);
```

Status: ✅

---

## 08. Object Spread Operator

Used:

```javascript
{
  ...todo,
  completed: !todo.completed
}
```

to update a todo without mutating the original object.

Status: ✅

---

## 09. Componentization

The application was divided into:

```text
App
│
├── TodoForm
│
├── TodoList
│
└── TodoItem
```

Status: ✅

---

## 10. Props

Passed data and functions between components:

```jsx
<TodoItem
  todo={todo}
  handleToggle={handleToggle}
  handleDelete={handleDelete}
/>
```

Status: ✅

---

## 11. Conditional Rendering

Used conditional rendering for:

* Completed state
* Empty state
* Clear Completed button
* Active filter

Example:

```jsx
{completedCount > 0 && (
  <button>
    Clear Completed
  </button>
)}
```

Status: ✅

---

## 12. `useEffect`

Used `useEffect` to synchronize React state with LocalStorage:

```jsx
useEffect(() => {
  localStorage.setItem(
    "todos",
    JSON.stringify(todos)
  );
}, [todos]);
```

Status: ✅

---

## 13. LocalStorage

Todos remain available after browser refresh.

### Save

```javascript
localStorage.setItem(
  "todos",
  JSON.stringify(todos)
);
```

### Load

```javascript
const savedTodos =
  localStorage.getItem("todos");

const todos = savedTodos
  ? JSON.parse(savedTodos)
  : [];
```

Status: ✅

---

## 14. Derived Data

Todo counts and filtered todos are calculated from the main `todos` state.

```javascript
const totalCount = todos.length;

const activeCount = todos.filter(
  (todo) => !todo.completed
).length;

const completedCount = todos.filter(
  (todo) => todo.completed
).length;
```

Status: ✅

---

## 15. Responsive CSS

The application supports desktop and mobile layouts.

Status: ✅

---

# 🔄 Application Data Flow

```text
                     App
                      │
              ┌───────┴───────┐
              │               │
             State           Logic
              │               │
              └───────┬───────┘
                      │
             ┌────────┴────────┐
             ↓                 ↓
         TodoForm          TodoList
                                │
                                ↓
                            TodoItem
```

---

# 💾 LocalStorage Flow

```text
User Action
    │
    ↓
React State
    │
    ↓
useEffect
    │
    ↓
LocalStorage
    │
    ↓
Browser Refresh
    │
    ↓
Load Saved Todos
    │
    ↓
React State
    │
    ↓
UI
```

---

# 🧪 Testing Checklist

```text
[x] Add Todo
[x] Add Todo using Enter
[x] Prevent empty Todo
[x] Display Todo
[x] Mark Todo completed
[x] Unmark Todo
[x] Delete Todo
[x] Delete confirmation
[x] All filter
[x] Active filter
[x] Completed filter
[x] Total count
[x] Active count
[x] Completed count
[x] Clear Completed
[x] Empty state
[x] LocalStorage
[x] Refresh persistence
[x] Responsive layout
```

---

# 🚀 Installation

Clone or open the project and install dependencies:

```bash
npm install
```

---

# ▶️ Run Development Server

```bash
npm run dev
```

Vite will provide a local development URL, normally:

```text
http://localhost:5173
```

---

# 🏗️ Production Build

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

---
