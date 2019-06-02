import React from "react";
import Note from "./note";

const NotesGrid = ({ notes, onRemoveNote }) => {
  return (
    <div className="NotesGrid">
      {notes.map(note => (
        <Note key={note.id} text={note.text} onDelete={() => onRemoveNote(note.id)} />
      ))}
    </div>
  );
};

export default NotesGrid;
