import React from 'react'

export default function Task() {
  return (
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
  )
}
