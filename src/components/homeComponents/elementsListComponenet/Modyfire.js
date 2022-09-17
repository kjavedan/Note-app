import React from 'react'
import { MdOutlineColorLens, MdPassword, MdFavorite } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { BiSelectMultiple } from "react-icons/bi";

export default function Modyfire(props) {
  // the modyfire component appears when the user hold an element in the elementsList
  // 1. it deletes element
  // 2. we can add to favorite
  // 3. we can add to password
  // 4. we can change theme
  // 5. we can select and unSelect all item with select all btn

  // state to open the color bar when the user click the theme btn
  const [openTheme, setOpentTheme] = React.useState(false);

  // state to determaine the sellectall btn wheather it should select or deSelect
  const [selectedAll, setSelectedAll] = React.useState(false)

  // function used different places to toggle the given prperty name to the given value
  function toggleAllProperties(propertyName , toggleTo){
    props.setMainState(prevState => {
      return prevState.map(element => {
        return {...element , [propertyName] : toggleTo}
      })
    })
  }

  // close the modyfire page when its clicked
  function closeModyfire(){
    props.setModificationMode(false);
    toggleAllProperties('isHeld', false)
  }

  // select all elements when its clicked
  function selectAll(){
    setSelectedAll(true)
    toggleAllProperties('isHeld', true)
  }

  // deSelect All item when its clicked
  function deSelectAll(){
    setSelectedAll(false)
    toggleAllProperties('isHeld', false)
  }


  // delete selected notes
  function deleteSelectedNotes(){
    const remainedElements = []
    const deletedElements = []
    props.mainState.forEach(element =>{
      if(!element.isHeld){
        remainedElements.push(element)
      }
      else{
       deletedElements.push({...element, isHeld: false})
      }
    })
    props.setMainState(remainedElements);
    props.setRecyclebin([...props.recyclebin, ...deletedElements])
    props.setModificationMode(false)  
  }
  
  // this part need some fixing 
  function toggleProperty(propertyName){
    props.setMainState(prevState => {
      return prevState.map(element =>{
        if(element.isHeld){
          return {...element, [propertyName] : !element[propertyName]}
        }else{
          return element;
        }
      })
    })
  }

  // toggle selected notes to or from favorites category
  function toggleFavorite(){
    toggleProperty('isFavorite')
  }

  // toggle selected note to or from password category
  function togglePassword(){
    toggleProperty('isPassword')
  }

  // toggle theme bar when the user click theme btn 
  function toggleTheme(){
    setOpentTheme(!openTheme)
  }
  // chnage the selectd elements value to the clicked color btn in the theme bar
  function changeTheme(value){
     props.setMainState(prevState => {
      return prevState.map(element =>{
        if(element.isHeld){
          return {...element, theme : value}
        }else{
          return element;
        }
      })
    })
  }

  // count selected notes and display them in the modyfire bar
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
            onClick={togglePassword}
            className={`btn add-to-passwords ${props.darkMode ? 'dark' : ''}`}><MdPassword /></button>
        {/* favorite */}
            <button 
            onClick={toggleFavorite}
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
            onClick={selectedAll ? deSelectAll : selectAll}
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
            onClick={() => changeTheme("default")}
            className={`color default ${openTheme ? "show" : ""}`}
          >
            <div className="line"></div>
          </div>
          <span
            onClick={() => changeTheme("#ffbbc2")}
            className={`color color-1 ${openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => changeTheme("#e6f0fd")}
            className={`color color-2 ${openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => changeTheme("#d9d9d9")}
            className={`color color-3 ${openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => changeTheme("#ffe598")}
            className={`color color-4 ${openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => changeTheme("#ffe6d6")}
            className={`color color-5 ${openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => changeTheme("#b5f7bb")}
            className={`color color-6 ${openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => changeTheme("lightcoral")}
            className={`color color-7 ${openTheme ? "show" : ""}`}
          ></span>
        </div>
    </div>
  )
}
