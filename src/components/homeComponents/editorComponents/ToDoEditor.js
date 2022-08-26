import React from "react";
import { FaPlus } from "react-icons/fa";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { BsChevronDown } from "react-icons/bs";

export default function ToDoEditor(props) {

  const [showTasks, setShowTasks] = React.useState(true);

  const [showFinishedTasks, setShowFinishedTask ] = React.useState(true);

  function toggleDisplayTasks(){
    setShowTasks(prevState => !prevState)
  }

  function toggleFinishedTasks(){
    setShowFinishedTask(prevState => !prevState)
  }

  // firstly we need a function to grap all tasks from the element and
  // display them as a single task on the screen
  // we need to check the is checked value if its true
  // we will hide the element in the tasks and shows it in finished task
  
  // step 1. pass props.tasks to the todo editor
  // step 2. itirate over them  and display

  return (
    <div className="tasks-container">
      <div className={`create-task ${props.darkMode ? 'dark' : ''}`}>
        <input className={props.darkMode ? 'dark' : ''} type="text" placeholder="Enter your task..." />
        <button className={props.darkMode ? 'dark' : ''}>
          <FaPlus />
        </button>
      </div>
      <div className={`tasks ${showTasks ? '' : 'hide'}`}>
        <div 
        className={`hide-tasks ${props.darkMode ? 'dark' : ''}`}
        onClick={toggleDisplayTasks}
        >
          <BsChevronDown
          className="down-icon" />
          Tasks
        </div>
        {/* where tasks will go */}
        
        {/* <div className={`task ${props.darkMode ? 'dark' : ''}`}>
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
        </div> */}
      </div>
      <div className={`accomplished-tasks ${showFinishedTasks ? '' : 'hide'}`}>
          <div 
          className={`hide-tasks ${props.darkMode ? 'dark' : ''}`}
          onClick={toggleFinishedTasks}
          >
          <BsChevronDown 
          className="down-icon"
          />
           Accomplished Tasks
          </div>
          {/* where finished task will go */}
          
          {/* <div className="task">
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
        </div> */}
      </div>
    </div>
  );
}
