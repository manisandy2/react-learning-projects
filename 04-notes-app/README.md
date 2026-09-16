# Notes App

A simple Notes App built with React to practice CRUD operations, state management, search, filtering, and browser LocalStorage.

## Features

* Create notes
* View notes
* Edit notes
* Delete notes
* Search notes by title or content
* Filter notes by category
* Combine search and category filtering
* Save notes in LocalStorage
* Restore notes after browser refresh
* Empty state handling
* Cancel note editing
* Responsive layout

## Technologies

* React
* JavaScript
* Vite
* CSS
* LocalStorage

## React Concepts Learned

* `useState`
* `useEffect`
* Props
* Event handling
* Controlled form inputs
* Conditional rendering
* Array `map()`
* Array `filter()`
* Component composition
* State updates
* LocalStorage
* `JSON.stringify()`
* `JSON.parse()`

## Project Structure

```text
notes-app/
├── public/
│
├── src/
│   ├── components/
│   │   ├── FilterBar.jsx
│   │   ├── NoteForm.jsx
│   │   ├── NoteItem.jsx
│   │   ├── NoteList.jsx
│   │   └── SearchBar.jsx
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

## Application Flow

```text
App
│
├── NoteForm
│   ├── Create Note
│   ├── Edit Note
│   └── Cancel Edit
│
├── SearchBar
│
├── FilterBar
│
└── NoteList
    └── NoteItem
        ├── Edit
        └── Delete
```

## Note Data

Each note contains:

```js
{
  id: 1,
  title: "Learn React",
  content: "Study React hooks",
  category: "Study"
}
```

## CRUD Operations

### Create

New notes are added to the notes state.

```js
setNotes((currentNotes) => [
  ...currentNotes,
  newNote,
]);
```

### Read

Notes are displayed using `map()`.

```js
notes.map((note) => (
  <NoteItem
    key={note.id}
    note={note}
  />
))
```

### Update

The selected note is updated using `map()`.

```js
setNotes((currentNotes) =>
  currentNotes.map((note) =>
    note.id === updatedNote.id
      ? updatedNote
      : note
  )
);
```

### Delete

A note is removed using `filter()`.

```js
setNotes((currentNotes) =>
  currentNotes.filter(
    (note) => note.id !== noteId
  )
);
```

## Search

Notes can be searched by:

* Title
* Content

Search is case-insensitive.

```text
Search: react
```

will match:

```text
React
REACT
react
```

## Filtering

Notes can be filtered by category:

```text
All
Work
Personal
Study
```

Search and category filtering can work together.

## LocalStorage

Notes are stored in the browser using LocalStorage.

Saving:

```js
useEffect(() => {
  localStorage.setItem(
    "notes",
    JSON.stringify(notes)
  );
}, [notes]);
```

Loading:

```js
const savedNotes = localStorage.getItem("notes");

return savedNotes
  ? JSON.parse(savedNotes)
  : [];
```

Notes therefore remain available after a browser refresh.

## Installation

Clone or download the project and install dependencies:

```bash
npm install
```

## Run the Project

Start the development server:

```bash
npm run dev
```

Open the URL shown by Vite in your browser.

Usually:

```text
http://localhost:5173
```

## Build for Production

```bash
npm run build
```

## Preview Production Build

```bash
npm run preview
```

## Learning Outcome

This project demonstrates the fundamentals of building a small React application with:

```text
React Components
       ↓
Props
       ↓
useState
       ↓
CRUD Operations
       ↓
useEffect
       ↓
LocalStorage
       ↓
Search
       ↓
Filtering
       ↓
Conditional Rendering
```

## Project Status

**Completed** ✅

Project 04 — Notes App is part of the React Learning Projects series.
