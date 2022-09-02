import React from 'react'
import { MdOutlineColorLens, MdPassword, MdFavorite } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

export default function Modyfire(props) {

  function closeModyfire(){
    props.setModificationMode(false);
    props.setMainState(prevState =>{
      return prevState.map(element => {
        return {...element, isHeld : false}
      })
    })
  }
  // delete selected notes
  function deleteSelectedNotes(){
    const newArr = []
    props.mainState.forEach(element =>{
      if(!element.isHeld){
        newArr.push(element)
      }
    })
    props.setMainState(newArr);
    props.setModificationMode(false)
    
  }
  // change selected notes themes
  function changeTheme(){

  }
  // add selected notes to favorites
  function addToFavorites(){

  }
  // add selected notes to passswords
  function addToPasswords(){

  }

  // count selected notes
  function counter(){
    let count = 0;
    props.mainState.forEach(element =>{
      if(element.isHeld){
        count++;
      }
    })
    return count;
  }
  const count = counter();

  return (
    <div className={`home-modyfire ${props.modificationMode ? 'open' : ''}`}>
        <div className="modyfire-btns">
            <button className="btn add-to-passwords"><MdPassword /></button>
            <button className="btn add-to-favorite"><MdFavorite /></button>
            <button className="btn change-theme"><MdOutlineColorLens /></button>
            <button 
            onClick={deleteSelectedNotes}
            className="btn delete"><FiTrash /></button>
        </div>
        <div className="modyfire-left-container">
            <span className="counter">{count}</span>
            <button 
            onClick={closeModyfire}
            className="close-modyfire"><AiOutlineClose />
            </button>
        </div>
    </div>
  )
}
