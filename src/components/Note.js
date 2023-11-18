import React, { useState } from 'react';

const Note = ({ note, onDeleteNote, onEditNote }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedNote, setEditedNote] = useState(note.text);

  const handleEditNote = () => {
    onEditNote(note.id, editedNote);
    setIsEditing(false);
  };

  return (
    <div className="note">
      {isEditing ? (
        <>
          <textarea
            value={editedNote}
            onChange={(e) => setEditedNote(e.target.value)}
          ></textarea>
          <button onClick={handleEditNote}>Save</button>
        </>
      ) : (
        <>
          <p>{note.text}</p>
          <button onClick={() => onDeleteNote(note.id)}>Delete</button>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Note;