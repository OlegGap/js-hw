import React from "react";
import Button from "./button";

const Modal = () => {
  return (
    <div className="Modal">
      <textarea className="Modal-actions" rows="6" />
      <Button label="Save" />
      <Button label="Cancel" />
    </div>
  );
};

Modal.propTypes = {};

export default Modal;
