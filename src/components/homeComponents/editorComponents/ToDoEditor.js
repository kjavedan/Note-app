import React from "react";
import Task from "./todoComponent/Task";
import { BsChevronDown } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { nanoid } from "nanoid";


export default function ToDoEditor(props) {


  const [taskBody, setTaskBody] = React.useState('');

  const [message, setMessage] = React.useState('');
 
  const [showTasks, setShowTasks] = React.useState(true);

  const [showFinishedTasks, setShowFinishedTasks ] = React.useState(true);

  function toggleDisplayTasks(){
    setShowTasks(prevState => !prevState)
  }

  function toggleFinishedTasks(){
    setShowFinishedTasks(prevState => !prevState)
  }
  
  function displayTasks(){
    if(props.tasks){
       return props.tasks.map(task =>{
        return (
          <Task 
          key={task.id} 
          id={task.id} 
          body={task.body} 
          isChecked={task.isChecked} 
          darkMode={props.darkMode} 
          setTasks={props.setTasks} 
          setShowTasks={setShowTasks} 
          setShowFinishedTasks={setShowFinishedTasks} 
          />)
       })
    }
  }
  const tasks = displayTasks();

  function handleChange(e){
    setTaskBody(e.target.value);
  }

  function handleSubmit(e){
    e.preventDefault();
    addTask();
    setTaskBody('')
  }

  function addTask(){
    if(taskBody){
      setShowTasks(true)
      setMessage('success');
      return props.setTasks(prevState => {
        return [{id:nanoid(), body:taskBody, isChecked:false},...prevState]
      })
    }else{
      setMessage('danger');
      setTimeout(()=>{
        setMessage('')
      },2000)
    }
  }

  return (
    <div className="tasks-container">
      <div className={`message ${message}`}>{message === 'danger' ? "can't add an empty task" : ""}</div>
      <div className={`create-task ${props.darkMode ? 'dark' : ''}`}>
        <form onSubmit={handleSubmit}>
          <input
          value={taskBody}
          onChange={handleChange} 
          className={props.darkMode ? 'dark' : ''} 
          type="text" 
          autoFocus={true}
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
