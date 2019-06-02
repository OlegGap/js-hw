import React from "react";
import Button from "./button";

const Note = ({ text, onDelete }) => (
  <div className="item">
    <p className="text">{text}</p>
    <div className="action">
      <Button onClick={onDelete} label="Delete" />
      <Button  label="Modify" />
    </div>
  </div>
);

export default Note;
