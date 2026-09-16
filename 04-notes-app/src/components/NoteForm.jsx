import { useEffect, useState } from "react";

function NoteForm({ onAddNote, editingNote, onUpdateNote, onCancelEdit }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Personal");

  useEffect(() => {
    if (editingNote) {
      setTitle(editingNote.title);
      setContent(editingNote.content);
      setCategory(editingNote.category || "Personal");
    }
  }, [editingNote]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !content.trim()) {
      return;
    }

    if (editingNote) {
      const updatedNote = {
        id: editingNote.id,
        title: title.trim(),
        content: content.trim(),
        category,
      };

      onUpdateNote(updatedNote);
    } else {
      const newNote = {
        id: Date.now(),
        title: title.trim(),
        content: content.trim(),
        category,
      };

      onAddNote(newNote);
    }

    setTitle("");
    setContent("");
    setCategory("Personal");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter note title"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <textarea
        placeholder="Enter note content"
        value={content}
        onChange={(event) => setContent(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
        <option value="Study">Study</option>
      </select>

      <button type="submit">{editingNote ? "Update Note" : "Add Note"}</button>

      {editingNote && (
        <button type="button" className="cancel-button" onClick={onCancelEdit}>
          Cancel
        </button>
      )}
    </form>
  );
}

export default NoteForm;
