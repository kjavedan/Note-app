import React from 'react'

export default function ToDo() {
  return (
    <div className="home-notes__note">
                <h4 className="todo-title">Title</h4>
                <div className="todo-list">
                {/*  */}
                  <div className="todo-task">
                    <div className="check-box"><span className="check"></span></div>
                    <div className="task-body">Hit the Gym</div>
                  </div>
                </div>
                <div className="note-info">
                    <span className="note-date">Jan 17</span>
                    <span className="note-category">Note</span>
                </div>
            </div>
  )
}
