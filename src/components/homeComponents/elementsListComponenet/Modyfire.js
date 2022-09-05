import React from 'react'
import { MdOutlineColorLens, MdPassword, MdFavorite } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";

export default function Modyfire(props) {

  const [openTheme, setOpentTheme] = React.useState(false);

  const [selectedAll, setSelectedAll] = React.useState(false)

  function toggleAllProperties(propertyName , toggleTo){
    props.setMainState(prevState => {
      return prevState.map(element => {
        return {...element , [propertyName] : toggleTo}
      })
    })
  }
  function closeModyfire(){
    props.setModificationMode(false);
    toggleAllProperties('isHeld', false)
  }
  function selectAll(){
    setSelectedAll(true)
    toggleAllProperties('isHeld', true)
  }
  function unSelectAll(){
    setSelectedAll(false)
    toggleAllProperties('isHeld', false)
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
  // open theme options
  function toggleTheme(){
    setOpentTheme(!openTheme)
  }


  function toggleProperty(propertyName, toggleTo){
    props.setMainState(prevState => {
      return prevState.map(element =>{
        if(element.isHeld){
          return {...element, [propertyName] : toggleTo}
        }else{
          return element;
        }
      })
    })
  }
  // add selected notes to favorites
  function addToFavorites(){
    toggleProperty('isFavorite', true)
  }
  //remove from favorite
  function removeFromFavorite(){
    toggleProperty('isFavorite', false)
  }
  // add selected notes to passswords
  function addToPasswords(){
    toggleProperty('isPassword', true)
  }
  // remove from passwords
  function removeFromPasswords(){
    toggleProperty('isPassword', false)
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
    <div className={`home-modyfire ${props.darkMode ? 'dark' : ''} ${props.modificationMode ? 'open' : ''}`}>
        <div className="modyfire-btns">
        {/* password */}
            <button 
            onClick={addToPasswords}
            className={`btn add-to-passwords ${props.darkMode ? 'dark' : ''}`}><MdPassword /></button>
        {/* favorite */}
            <button 
            onClick={addToFavorites}
            className={`btn add-to-favorite ${props.darkMode ? 'dark' : ''}`}><MdFavorite /></button>
        {/* theme btn*/}
            <button 
            onClick={toggleTheme}
            className={`btn change-theme ${props.darkMode ? 'dark' : ''}`}><MdOutlineColorLens /></button>
        {/* delete */}
            <button 
            onClick={deleteSelectedNotes}
            className={`btn delete ${props.darkMode ? 'dark' : ''}`}><FiTrash /></button>
        {/* select all */}
            <button 
            onClick={selectedAll ? unSelectAll : selectAll}
            className={`btn select-all ${props.darkMode ? 'dark' : ''}`}><BiSelectMultiple /></button>
        </div>
        {/* counter & close modyfire */}
        <div className="modyfire-left-container">
            <span className={`counter ${props.darkMode ? 'dark' : ''}`}>{count}</span>
            <button 
            onClick={closeModyfire}
            className={`close-modyfire ${props.darkMode ? 'dark' : ''}`}><AiOutlineClose />
            </button>
        </div>
        {/* theme bar */}
        <div className={`modyfire-theme ${props.darkMode ? 'dark' : ''} ${openTheme ? 'open' : ''}`}>
            <div
            onClick={() => toggleProperty("theme","default")}
            className={`color default ${openTheme ? "show" : ""}`}
          >
            <div className="line"></div>
          </div>
          <span
            onClick={() => toggleProperty("theme","#ffbbc2")}
            className={`color color-1 ${openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => toggleProperty("theme","#e6f0fd")}
            className={`color color-2 ${openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => toggleProperty("theme","#d9d9d9")}
            className={`color color-3 ${openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => toggleProperty("theme","#ffe598")}
            className={`color color-4 ${openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => toggleProperty("theme","#ffe6d6")}
            className={`color color-5 ${openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => toggleProperty("theme","#b5f7bb")}
            className={`color color-6 ${openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => toggleProperty("theme","lightcoral")}
            className={`color color-7 ${openTheme ? "show" : ""}`}
          ></span>
        </div>
    </div>
  )
}
