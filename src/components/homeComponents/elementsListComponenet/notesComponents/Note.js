import React from "react";
import { MdFavorite } from "react-icons/md";

export default function Note(props) {
  
  return (
    <div
      style={props.changeTheme(props.theme)}
      onClick={props.modificationMode ?()=> props.selectElement(props.id) : () => props.openClickedElement(props.id, props.category)}
      onMouseDown={props.startTimer}
      onTouchStart={props.startTimer}
      onMouseUp={props.stopTimer}
      onMouseLeave={props.stopTimer}
      onTouchEnd={props.stopTimer}
      className={`home-notes__note ${props.darkMode ? "dark" : ""} ${props.isHeld ? 'held' : ''}`}
    >
      <span className={`favorite ${props.darkMode ? 'dark' : ''}`}>{props.isFavorite? <MdFavorite /> : ''}</span>
      <h4
        style={props.changeTextColor(props.theme)}
        className={`note-title ${props.darkMode ? "dark" : ""}`}
      >
        {props.title}
      </h4>
      <p
        style={props.changeTextColor(props.theme)}
        className={`note-text ${props.darkMode ? "dark" : ""}`}
      >
        {props.body}
      </p>
      <div
        style={props.changeTextColor(props.theme)}
        className={`note-info ${props.darkMode ? "dark" : ""}`}
      >
        <span className="note-date">{props.shortDate}</span>
        <span className="note-category">{props.category}</span>
      </div>
    </div>
  );
}
