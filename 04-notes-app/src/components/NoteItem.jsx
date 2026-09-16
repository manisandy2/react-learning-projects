function NoteItem({
  note,
  onDeleteNote,
  onEditNote,
}) {
  return (
    <article className="note-item">
      <div className="note-header">
        <h3>{note.title}</h3>

        <span className="note-category">
          {note.category || "Personal"}
        </span>
      </div>

      <p>{note.content}</p>

      <div className="note-actions">
        <button
          className="edit-button"
          onClick={() => onEditNote(note)}
        >
          Edit
        </button>

        <button
          className="delete-button"
          onClick={() => onDeleteNote(note.id)}
        >
          Delete
        </button>
      </div>
    </article>
  );
}

export default NoteItem;