import React from 'react'
import { MdDone } from "react-icons/md";
import { nanoid } from 'nanoid'

export default function ToDo(props) {

  // function to display the todo task on the screen
  function dispalyTask(tasks){
    const todoTask = tasks.map(task => {
      return ( 
              <div key={nanoid()} className={`todo-task ${props.darkMode ? 'dark' : ''}`}>
                    <div className={`check-box ${task.isChecked ? 'checked' : ''} ${props.darkMode ? 'dark' : ''}`}>
                        <span className="check">
                        {task.isChecked && <MdDone />}
                        </span>
                    </div>
                    <div className="task-body">{task.body}</div>
              </div>
            )
    })
    return todoTask
  }
  

  return (
            <div 
            onClick={()=>props.openClickedElement(props.id, props.category)}
            className={`home-notes__note ${props.darkMode ? 'dark' : ''}`}>
                  <h4 className={`note-title ${props.darkMode ? 'dark' : ''}`}>{props.title}</h4>
                <div className="todo-list">
                {dispalyTask(props.tasks)}
                </div>
                <div className={`note-info ${props.darkMode ? 'dark' : ''}`}>
                    <span className="note-date">{props.date}</span>
                    <span className="note-category">{props.category}</span>
                </div>
            </div>
  )
}
