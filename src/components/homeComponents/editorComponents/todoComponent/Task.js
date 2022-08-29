import React from 'react'
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { MdDone } from "react-icons/md";

export default function Task(props) {

    const [taskBody, setTaskBody] = React.useState(props.body);

    const [edit, setEdit] = React.useState(false);

    function deleteTask(id){
         props.setElementData(prevState =>{
            return {...prevState, tasks : prevState.tasks.filter(task =>{
                if(task.id !== id){
                    return task;
                }
            })}
        })
    }

    function editTask(id){
        setEdit(true)
        console.log(id)
    }

    function handleChange(e){
        setTaskBody(e.target.value);
    }

    function confirmEdit(id){
        props.setElementData(prevState => {
            return {...prevState, tasks: prevState.tasks.map(task => {
                if(task.id === id){
                    return {...task, body : taskBody}
                }else{
                    return task;
                }
            })}
        })
        setEdit(false)
    }

    function toggleTask(id){
        console.log(id)
        props.setShowTasks(true);
        props.setShowFinishedTasks(true);
        props.setElementData(prevState => {
            return {...prevState, tasks: prevState.tasks.map(task => {
                if(task.id === id){
                    return {...task, isChecked: !task.isChecked}
                }else{
                    return task;
                }
            })}
        })
    }


  return (
        <div className={`task ${props.darkMode ? 'dark' : ''} ${props.isChecked ? 'checked' : ''}`}>
          <div 
          onClick={()=> toggleTask(props.id)} 
          className="check">
            <span className={`tick ${props.isChecked ? 'checked' : ''}`}><MdDone /></span>
          </div>
          <div className="btns">
            <button id="btn" className={props.darkMode ? 'dark' : ''}>
            {edit 
            ? 
            <input className={`${props.darkMode ? 'dark' : ''}`} type='text' autoFocus={true} value={taskBody} onChange={handleChange} /> 
            : 
            <div onClick={()=> toggleTask(props.id)} className="to-do-text">{props.body}</div>}
               
            </button>

            {edit
            ?     
            <button 
            onClick={()=> confirmEdit(props.id)}
            className="edit">
              <MdDone />
            </button>
            :
            <button 
            onClick={()=> editTask(props.id)}
            className="edit">
              <FiEdit />
            </button>
            }


            <button 
            onClick={()=> deleteTask(props.id)}
            className="delete"
            >
              <FiTrash2 />
            </button>
          </div>
        </div> 
  )
}
