import React from "react";
import { ReactComponent as NoteBook } from "../Images/noteBook.svg";

export default function Start(props) {
  return (
    <div className="start dark">
      <NoteBook className="start__img" />
      <h2 className="start__title dark">Daily Notes</h2>
      <p className="start__subtitle">Take notes & set targets To Do</p>
      <button className="start__btn" onClick={() => props.setStart(true)}>
        Get Started
      </button>
    </div>
  );
}
