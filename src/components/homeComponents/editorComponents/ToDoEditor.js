import React from "react";
import Task from "./todoComponent/Task";
import { BsChevronDown } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";



export default function ToDoEditor(props) {

  const [taskBody, setTaskBody] = React.useState('');
 
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

  function handleChange(e){
    setTaskBody(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    console.log(taskBody)
    setTaskBody('')
  }

  return (
    <div className="tasks-container">
      <div className={`create-task ${props.darkMode ? 'dark' : ''}`}>
        <form onSubmit={handleSubmit}>
          <input
          value={taskBody}
          onChange={handleChange} 
          className={props.darkMode ? 'dark' : ''} 
          type="text" 
          placeholder="Enter your task..." 
          />
          <button
          className={props.darkMode ? 'dark' : ''}
          >
            <FaPlus />
          </button>
        </form>
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
          {tasks}
      </div>
    </div>
  );
}
