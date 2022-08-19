import React from 'react'
import {FaPlus} from 'react-icons/fa'

export default function ToDoEditor() {
  return (
    <div className='tasks-container'>
      <div className="create-task">
        <input
         type="text"
         placeholder='Enter your task...'
          />
          <button>
            <FaPlus />
          </button>
      </div>
      <div className="tasks">
        <div className="task">
           <div class="check"><span class='tick'></span></div>
           <div class="btns">
              <button id="btn"><span class="to-do-text"></span> hit the gym </button>
              <button class="edit"></button>
              <button class="delete"></button>
           </div>
        </div>
      </div>
      <div className="accomplished-tasks">

      </div>
    </div>
  )
}
