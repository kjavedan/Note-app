import React from 'react'
import { FiTrash } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";
import {MdRestore} from 'react-icons/md'

export default function RecyclebinModyfire(props) {
  return (
    <>
        <div className="modyfire-btns">
        {/* delete */}
            <button 
            className={`btn delete ${props.darkMode ? 'dark' : ''}`}><FiTrash /></button>
        {/* restore */}
            <button 
            className={`btn restore ${props.darkMode ? 'dark' : ''}`}><MdRestore /></button>
        {/* select all */}
            <button 
            className={`btn select-all ${props.darkMode ? 'dark' : ''}`}><BiSelectMultiple /></button>
        </div>
        {/* counter & close modyfire */}
        <div className="modyfire-left-container">
            <span className={`counter ${props.darkMode ? 'dark' : ''}`}>1</span>
            <button 
            className={`close-modyfire ${props.darkMode ? 'dark' : ''}`}><AiOutlineClose />
            </button>
        </div>
    </>
  )
}
