import React, { Component } from "react";
import Button from "./button";

export default class NoteEditor extends Component {
  state = {
    inputValue: "Random text"
  };
  handleChange = e => {
    this.setState({
      inputValue: e.target.value //змінюємо стан, тільки так!
    });
  };
  handelSubmit = e => {
    e.preventDefault();
    this.setState({
      inputValue: ""
    });
    this.props.onAddNote(this.state.inputValue)
  };
  render() {
    const { inputValue } = this.state;
    return (
      <form className="noteEditor" onSubmit={this.handelSubmit}>
        <h1>{inputValue}</h1>
        <textarea
          rows="5"
          className="input"
          value={inputValue}
          onChange={this.handleChange} //при дії визиваємо це
        />
        <Button type="submit" label="add" />
      </form>
    );
  }
}
