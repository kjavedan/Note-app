import React from 'react'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";

export default function Task(props) {
  return (
        <div className={`task ${props.darkMode ? 'dark' : ''}`}>
          <div className="check">
            <span className="tick"><MdDone /></span>
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
  )
}
