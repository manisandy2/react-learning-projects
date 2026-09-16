import NoteItem from "./NoteItem";

function NoteList({
  notes,
  onDeleteNote,
  onEditNote,
  hasNotes,
  hasActiveFilters,
}) {
  if (!hasNotes) {
    return (
      <div className="empty-state">
        <h2>No notes yet</h2>
        <p>Create your first note to get started.</p>
      </div>
    );
  }

  if (notes.length === 0 && hasActiveFilters) {
    return (
      <div className="empty-state">
        <h2>No matching notes</h2>
        <p>
          Try a different search or category.
        </p>
      </div>
    );
  }

  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteItem
          key={note.id}
          note={note}
          onDeleteNote={onDeleteNote}
          onEditNote={onEditNote}
        />
      ))}
    </div>
  );
}

export default NoteList;