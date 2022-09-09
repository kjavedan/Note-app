import React from "react";
import { MdDone, MdFavorite } from "react-icons/md";
import { nanoid } from "nanoid";

export default function ToDo(props) {
  // function to display all todo tasks on the screen
  function displayTasks(tasks) {
    const todoTask = tasks.map((task) => {
      return (
        <div
          key={nanoid()}
          className={`todo-task ${props.darkMode ? "dark" : ""}`}
        >
          <div
            className={`check-box ${task.isChecked ? "checked" : ""} ${
              props.darkMode ? "dark" : ""
            }`}
          >
            <span className="check">{task.isChecked && <MdDone />}</span>
          </div>
          <div className="task-body">{task.body}</div>
        </div>
      );
    });
    return todoTask;
  }

  // To Do component
  return (
    <div
      style={props.changeTheme(props.theme)}
      onClick={props.modificationMode ? ()=> props.selectElement(props.id) : () => props.openClickedElement(props.id, props.category)}
      onMouseDown={props.startTimer}
      onTouchStart={props.startTimer}
      onMouseUp={props.stopTimer}
      onMouseLeave={props.stopTimer}
      onTouchEnd={props.stopTimer}
      className={`home-notes__note ${props.darkMode ? "dark" : ''} ${props.isHeld ? 'held' : ''}`}
    >
      <span className={`favorite ${props.darkMode ? 'dark' : ''}`}>{props.isFavorite? <MdFavorite /> : ''}</span>
      <h4
        style={props.changeTextColor(props.theme)}
        className={`note-title ${props.darkMode ? "dark" : ""}`}
      >
        {props.title}
      </h4>
      {/* display tasks */}
      <div style={props.changeTextColor(props.theme)} className="todo-list">
        {displayTasks(props.tasks)}
      </div>

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
