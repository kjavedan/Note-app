import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

export default function ToDoEditor(props) {
  return (
    <div className="tasks-container">
      <div className={`create-task ${props.darkMode ? 'dark' : ''}`}>
        <input className={props.darkMode ? 'dark' : ''} type="text" placeholder="Enter your task..." />
        <button className={props.darkMode ? 'dark' : ''}>
          <FaPlus />
        </button>
      </div>
      <div className="tasks">
        <div className="hide-tasks">
          <BsChevronDown
          className="down-icon" />
          Tasks
        </div>

        <div className={`task ${props.darkMode ? 'dark' : ''}`}>
          <div className="check">
            <span className="tick"></span>
          </div>
          <div className="btns">
            <button id="btn" className={props.darkMode ? 'dark' : ''}>
              <span className="to-do-text">hit the gym</span> 
            </button>
            <button className="edit">
              <FiEdit />
            </button>
            <button className="delete">
              <FiTrash2 />
            </button>
          </div>
        </div>
      </div>
      <div className="accomplished-tasks">
          <div className="hide-tasks">
          <BsChevronDown 
          className="down-icon"
          />
           Accomplished Tasks
          </div>
          <div className="task">
          <div className="check">
            <span className="tick">
              <MdDone />
            </span>
          </div>
          <div className="btns">
            <button id="btn">
              <span className="to-do-text">hit the gym</span> 
            </button>
            <button className="edit">
              <FiEdit />
            </button>
            <button className="delete">
              <FiTrash2 />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
