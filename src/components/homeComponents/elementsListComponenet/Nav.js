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
  setShowBtns(!showBtns)
}

  return (
    <nav className="home-nav">
      <h2 className="home-nav__title">notes</h2>
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

      <div className="home-nav__search-container">
        <input className="" type="text" placeholder="Search for your note" />
        <span className="search-icon">
          <FiSearch />
        </span>
      </div>
      <div className="home-nav__theme-switcher">
        <div className="default-mode ">
          <BsSun />
        </div>
        <div className="dark-mode active ">
          <BsMoon />
        </div>
      </div>
    </nav>
  );
}
