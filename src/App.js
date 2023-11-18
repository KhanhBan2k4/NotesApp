import './App.css';
import React, { useState } from 'react';
import NoteList from './components/NoteList';
import NoteForm from './components/NoteForm';
import Danger from './components/Danger';

const App = () => {
  const [notes, setNotes] = useState([]);

  const addNote = (text) => {
    setNotes([...notes, { id: Date.now(), text }]);
  };

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  const editNote = (id, newText) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };

  return (
    <div className="app">
      <h1>Notes App (beta)<Danger/></h1>
      <NoteForm onAddNote={addNote} />
      <NoteList
        notes={notes}
        onDeleteNote={deleteNote}
        onEditNote={editNote}
      />
    </div>
  );
};

export default App;
