import { useEffect, useState } from "react";

import NoteForm from "./components/NoteForm";
import NoteList from "./components/NoteList";
import SearchBar from "./components/SearchBar";
import FilterBar from "./components/FilterBar";

import "./App.css";

function App() {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");

    return savedNotes ? JSON.parse(savedNotes) : [];
  });

  const [editingNote, setEditingNote] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] =
    useState("All");

  useEffect(() => {
    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  const handleAddNote = (newNote) => {
    setNotes((currentNotes) => [
      ...currentNotes,
      newNote,
    ]);
  };

  const handleDeleteNote = (noteId) => {
    setNotes((currentNotes) =>
      currentNotes.filter(
        (note) => note.id !== noteId
      )
    );
  };

  const handleEditNote = (note) => {
    setEditingNote(note);
  };

  const handleUpdateNote = (updatedNote) => {
    setNotes((currentNotes) =>
      currentNotes.map((note) =>
        note.id === updatedNote.id
          ? updatedNote
          : note
      )
    );

    setEditingNote(null);
  };

  const filteredNotes = notes.filter((note) => {
    const searchText = searchTerm
      .trim()
      .toLowerCase();

    const matchesSearch =
      note.title.toLowerCase().includes(searchText) ||
      note.content.toLowerCase().includes(searchText);

    const matchesCategory =
      selectedCategory === "All" ||
      (note.category || "Personal") === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const hasActiveFilters =
    searchTerm.trim() !== "" ||
    selectedCategory !== "All";

  return (
    <div className="app">
      <h1>Notes App</h1>

      <p className="note-count">
        {notes.length}{" "}
        {notes.length === 1 ? "note" : "notes"}
      </p>

      <NoteForm
        onAddNote={handleAddNote}
        editingNote={editingNote}
        onUpdateNote={handleUpdateNote}
        onCancelEdit={() => setEditingNote(null)}

      />

      <SearchBar
        searchTerm={searchTerm}
        onSearch={setSearchTerm}
      />

      <FilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      <hr />

      <NoteList
        notes={filteredNotes}
        onDeleteNote={handleDeleteNote}
        onEditNote={handleEditNote}
        hasNotes={notes.length > 0}
        hasActiveFilters={hasActiveFilters}
      />
    </div>
  );
}

export default App;