import React from "react";
import Task from "./todoComponent/Task";
import { BsChevronDown } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";



export default function ToDoEditor(props) {
 
  const [showTasks, setShowTasks] = React.useState(true);

  const [showFinishedTasks, setShowFinishedTask ] = React.useState(true);

  function toggleDisplayTasks(){
    setShowTasks(prevState => !prevState)
  }

  function toggleFinishedTasks(){
    setShowFinishedTask(prevState => !prevState)
  }
  
  function displayTasks(){
    if(props.tasks){
       return props.tasks.map(task =>{
        return <Task key={task.id} id={task.id} body={task.body} isChecked={task.isChecked} darkMode={props.darkMode}/>
       })
    }
  }
  const tasks = displayTasks();
  console.log(tasks)
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
        {tasks}
     
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
          {tasks}

      </div>
    </div>
  );
}
