import React from "react";
import { MdFormatLineSpacing } from "react-icons/md";

export default function Note(props) {
  function changeTheme(color) {
    let style = {};
    if (color !== "default") {
      return (style = {
        backgroundColor: color,
      });
    } else return style;
  }
  function changeTextColor(color) {
    let style = {};
    if (color === "default" && props.darkMode) {
      return (style = {
        color: "#FFF",
      });
    }
  }
 
      
  return (
    <div
      style={changeTheme(props.theme)}
      onClick={props.modificationMode ?()=> props.selectElement(props.id) : () => props.openClickedElement(props.id, props.category)}
      onMouseDown={props.startTimer}
      onTouchStart={props.startTimer}
      onMouseUp={props.stopTimer}
      onMouseLeave={props.stopTimer}
      onTouchEnd={props.stopTimer}
      className={`home-notes__note ${props.darkMode ? "dark" : ""} ${props.isHeld ? 'held' : ''}`}
    >
      <h4
        style={changeTextColor(props.theme)}
        className={`note-title ${props.darkMode ? "dark" : ""}`}
      >
        {props.title}
      </h4>
      <p
        style={changeTextColor(props.theme)}
        className={`note-text ${props.darkMode ? "dark" : ""}`}
      >
        {props.body}
      </p>
      <div
        style={changeTextColor(props.theme)}
        className={`note-info ${props.darkMode ? "dark" : ""}`}
      >
        <span className="note-date">{props.shortDate}</span>
        <span className="note-category">{props.category}</span>
      </div>
    </div>
  );
}
