import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";
import { AiOutlineFileAdd } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { MdAdd } from "react-icons/md";

// ------------------------


export default function Nav(props) {

const [showBtns, setShowBtns] = React.useState(false)

function toggleBtns(){
  setShowBtns(prevState => !prevState)
}

function changeTheme(){
  props.setDarkMode(prevState => !prevState)
}

  return (
    <nav className={`home-nav ${props.darkMode ? 'dark' : ''}`}>
      <h2 className={`home-nav__title ${props.darkMode ? 'dark' : ''}`}>notes</h2>
      <div className="home-nav__btns-container">
      {/* note btn */}
        <div className={`container ${showBtns ? 'show' : ''}`}>
          <span 
          className="create-note"
          onClick = {()=> props.openRelativeEditor('note')}
          >
            <AiOutlineFileAdd />
          </span>
          Note
        </div>
        {/* todo btn */}
        <div className={`container ${showBtns ? 'show' : ''}`}>
          <span 
          className="create-todo"
          onClick={()=> props.openRelativeEditor('todo')}
          >
            <TiTick />
          </span>
          To Do
        </div>
        {/* create btn */}
        <div className="create-container">
          <span className= 'create' onClick={toggleBtns}>
            <MdAdd />
          </span>
        </div> 
      </div>

      <div className={`home-nav__search-container ${props.darkMode ? 'dark' : ''}`}>
        <input 
        className={props.darkMode ? 'dark' : ''} 
        type="text" 
        placeholder="Search for your note"
         />

        <span className="search-icon">
          <FiSearch />
        </span>
      </div>
      <div 
      className="home-nav__theme-switcher"
      onClick={changeTheme}
      >
        <div className={`default-mode ${props.darkMode ? 'dark' : ''} `}>
          <BsSun />
        </div>
        <div className={`dark-mode ${props.darkMode ? 'dark' : ''} `}>
          <BsMoon />
        </div>
      </div>
    </nav>
  );
}