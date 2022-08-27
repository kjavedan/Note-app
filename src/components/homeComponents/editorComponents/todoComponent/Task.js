import React from 'react'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";

export default function Task(props) {
  return (
        <div className={`task ${props.darkMode ? 'dark' : ''} ${props.isChecked ? 'checked' : ''}`}>
          <div className="check">
            <span className={`tick ${props.isChecked ? 'checked' : ''}`}><MdDone /></span>
          </div>
          <div className="btns">
            <button id="btn" className={props.darkMode ? 'dark' : ''}>
              <span className="to-do-text">{props.body}</span> 
            </button>
            <button className="edit">
              <FiEdit />
            </button>
            <button className="delete">
              <FiTrash2 />
            </button>
          </div>
        </div> 
  )
}
