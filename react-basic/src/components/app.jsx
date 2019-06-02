import React, { Component } from "react";
import NoteEditor from "./note-editor";
import NotesGrid from "./notes-grid";
import * as api from "../services/api";
import Modal from './modal'

export default class App extends Component {
  state = {
    notes: []
  };

  componentDidMount() {
    api.getAllNotes().then(notes => {
      this.setState({ notes });
    });
  }

  removeNote = idToRemove => {
    api.deleteNote(idToRemove).then(id =>
      this.setState(prevState => ({
        notes: prevState.notes.filter(note => note.id !== id)
      }))
    );
  };

  addNote = text => {
    api.addNote({ text }).then(note => {
      console.log(note);
      this.setState(prevState => ({
        notes: [note, ...prevState.notes] //перезаписуэмо масив(+беремо попередны даны)
      }));
    });
  };
  render() {
    const { notes } = this.state;
    return (
      <div>
        <h1> React is it</h1>
        <NoteEditor onAddNote={this.addNote} />
        <NotesGrid notes={notes} onRemoveNote={this.removeNote} />
        <Modal />
      </div>
    );
  }
}
