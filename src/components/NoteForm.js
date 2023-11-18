import React, { useState } from 'react';

const NoteForm = ({ onAddNote }) => {
  const [newNote, setNewNote] = useState('');

  const handleAddNote = () => {
    if (newNote.trim() !== '') {
      onAddNote(newNote);
      setNewNote('');
    }
  };

  return (
    <div className="note-form">
      <textarea
        className='your-textarea-class'
        placeholder="Add a new note..."
        value={newNote}
        onChange={(e) => setNewNote(e.target.value)}
      ></textarea>
      <button onClick={handleAddNote}>Add Note</button>
    </div>
  );
};

export default NoteForm;