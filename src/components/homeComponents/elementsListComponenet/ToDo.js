import React from 'react'

export default function ToDo(props) {
  return (
    <div className={`home-notes__note ${props.darkMode ? 'dark' : ''}`}>
                  <h4 className={`note-title ${props.darkMode ? 'dark' : ''}`}>{props.title}</h4>
                <div className="todo-list">
                {/*  */}
                  <div className={`todo-task ${props.darkMode ? 'dark' : ''}`}>
                    <div className={`check-box ${props.darkMode ? 'dark' : ''}`}><span className="check"></span></div>
                    <div className="task-body">Hit the Gym</div>
                  </div>
                </div>
                <div className={`note-info ${props.darkMode ? 'dark' : ''}`}>
                    <span className="note-date">{props.date}</span>
                    <span className="note-category">{props.category}</span>
                </div>
            </div>
  )
}
