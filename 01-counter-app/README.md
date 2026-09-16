# Counter App

A beginner-friendly React project built to learn the fundamentals of **React state management, event handling, and conditional logic**.

---

## 📌 Project Information

| Item       | Details          |
| ---------- | ---------------- |
| Project    | Counter App      |
| Folder     | `01-counter-app` |
| Technology | React            |
| Language   | JavaScript       |
| Level      | Beginner         |
| Status     | ✅ Completed     |

---

## 🎯 Learning Objectives

This project focuses on the basic concepts of React:

- React components
- JSX
- `useState`
- State management
- Event handling
- `onClick`
- Updating state
- Previous state
- Conditional logic
- Multiple state updates
- Rendering state in the UI

---

## 🚀 Features

The Counter App provides:

- ➕ Increment counter
- ➖ Decrement counter
- 🔢 Display current count
- 🚫 Prevent count from going below `0`
- 🔄 Reset counter
- ⚛️ React state-based UI updates

---

## 🧠 React Concepts Used

### 1. Component

The application is created using a React functional component.

```jsx
function Counter() {
  return (
    <div>
      <h1>Counter App</h1>
    </div>
  );
}
```

---

### 2. useState

`useState` is used to store the counter value.

```jsx
const [count, setCount] = useState(0);
```

- `count` → current value
- `setCount` → function used to update the value
- `0` → initial value

---

### 3. Event Handling

The `onClick` event handles button clicks.

```jsx
<button onClick={handleIncrement}>+</button>
```

---

### 4. Updating State

The counter is updated using the state setter.

```jsx
setCount((previousCount) => previousCount + 1);
```

For decrement:

```jsx
setCount((previousCount) => previousCount - 1);
```

---

## 🔢 Counter Logic

### Increment

```text
Current Count
      ↓
     +1
      ↓
Updated Count
```

Example:

```text
0 → 1 → 2 → 3 → 4
```

---

### Decrement

```text
Current Count
      ↓
     -1
      ↓
Updated Count
```

Example:

```text
4 → 3 → 2 → 1 → 0
```

The application prevents the counter from becoming negative.

```jsx
const handleDecrement = () => {
  if (count > 0) {
    setCount((previousCount) => previousCount - 1);
  }
};
```

---

### Reset

Reset returns the counter to its initial value.

```jsx
const handleReset = () => {
  setCount(0);
};
```

---

## 🔄 Application Flow

```text
User clicks button
        ↓
    Event Handler
        ↓
    setCount()
        ↓
    React updates state
        ↓
    Component re-renders
        ↓
Updated counter displayed
```

---

## 📂 Project Structure

```text
01-counter-app/
│
├── src/
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
│
├── public/
│
├── package.json
├── package-lock.json
└── README.md
```

---

## 💻 Example Implementation

```jsx
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((previousCount) => previousCount + 1);
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount((previousCount) => previousCount - 1);
    }
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div>
      <h1>Counter App</h1>

      <h2>{count}</h2>

      <button onClick={handleIncrement}>+</button>

      <button onClick={handleDecrement}>-</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
}

export default App;
```

---

## ▶️ Run the Project

From the project folder:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Then open the URL shown by Vite in the terminal.

---

## 🧪 Test Cases

| Action           | Expected Result          |
| ---------------- | ------------------------ |
| Initial load     | `0`                      |
| Click `+`        | Counter increases by `1` |
| Click `-`        | Counter decreases by `1` |
| Click `-` at `0` | Counter remains `0`      |
| Click `Reset`    | Counter becomes `0`      |

---

## 📚 What I Learned

After completing this project, I understand:

- How React components work
- How JSX is written
- How `useState()` works
- How state controls the UI
- How events are handled in React
- How buttons trigger state changes
- How React re-renders after state changes
- How to use the previous state when updating values
- How to apply simple business logic inside event handlers

---

## ✅ Learning Progress

```text
React Fundamentals
       │
       ├── Component        ✅
       ├── JSX              ✅
       ├── useState         ✅
       ├── Events           ✅
       ├── State Updates    ✅
       └── Conditional Logic ✅
```

---

---

## 📌 Project Status

**Counter App — ✅ Completed**

This project is part of the React Learning Projects repository.
