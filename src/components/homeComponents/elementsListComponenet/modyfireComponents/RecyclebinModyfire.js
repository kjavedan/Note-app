import React from 'react'
import { FiTrash } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import {MdRestore} from 'react-icons/md'

export default function RecyclebinModyfire(props) {

    const count = props.counter(props.recyclebin)

    function deleteSelectedNotes(){
        props.setModificationMode(false)
        props.setRecyclebin(prevState => (prevState.filter(element => !element.isHeld)))
        props.setMessage({text: getMessage('delete'), color:'lightgreen'})
    }
    function getMessage(message){
        if(message === 'delete'){
            if(count > 1){
              return (`${count} Notes been removed permanentlly `)
            }else{
              return 'Note been removed permanetly'
            }
        }
        else{
            if(count > 1){
                return (`${count} Notes been restored `)
            }else{
                return 'Not has been restored'
            }
        }
    }
    
      function restoreSelectedNotes(){
        const elementsToResotre = props.recyclebin.map(element => {
            if(element.isHeld){
                return {...element, isHeld: false}
            }
        })
        props.setRecyclebin(prevState => {
            return prevState.filter(element => {
                if(!element.isHeld){
                    return element
                }
            })
        })
        props.setModificationMode(false)
        props.setMainState(prevState =>([...elementsToResotre, ...prevState]))
        props.setMessage({text: getMessage(), color:'lightgreen'})
      }
  return (
    <>
        <div className="modyfire-btns">
        {/* delete */}
            <button 
            onClick={deleteSelectedNotes}
            className={`btn delete ${props.darkMode ? 'dark' : ''}`}><FiTrash /></button>
        {/* restore */}
            <button 
            onClick={restoreSelectedNotes}
            className={`btn restore ${props.darkMode ? 'dark' : ''}`}><MdRestore /></button>
        {/* select all */}
            <button 
            onClick={props.selectedAll ? ()=>props.deSelectAll(props.setRecyclebin) : ()=>props.selectAll(props.setRecyclebin)}
            className={`btn select-all ${props.darkMode ? 'dark' : ''}`}><BiSelectMultiple /></button>
        </div>
        {/* counter & close modyfire */}
        <div className="modyfire-left-container">
            <span className={`counter ${props.darkMode ? 'dark' : ''}`}>{count}</span>
            <button 
            onClick={()=>props.closeModyfire(props.setRecyclebin)}
            className={`close-modyfire ${props.darkMode ? 'dark' : ''}`}><AiOutlineClose />
            </button>
        </div>
    </>
  )
}
