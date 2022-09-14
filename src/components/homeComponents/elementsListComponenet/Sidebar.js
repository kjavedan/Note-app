import React from "react";
import { GiBackwardTime } from 'react-icons/gi'
import { MdPassword, MdFavorite, MdOutlineNoteAlt } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { BsFiles } from "react-icons/bs";


export default function Sidebar(props) {

  // state for toggling the sidebar
  const [sidebar, setSidebarOpen] = React.useState(false);
  
  // toggle sidebar with sidebar btn
  function toggleSidebar(){
    setSidebarOpen(!sidebar);
  }
  // close the side bar with clicking on the rest of the screen
  function closeSidebar(){
    setSidebarOpen(false)
  }
  // toggle categories -> one at the time
  function handleClick(category){
    props.setHeldCategory(category)
  }

  return (
    <div className="home-sidebar-container">
      <div 
      onClick={closeSidebar}
      className={`close-sidebar ${sidebar ? 'open' : ''}`}></div>
      <div className={`sidebar ${props.darkMode ? 'dark' : ''} ${sidebar ? 'open' : ''}`}>
        <div 
        onClick={toggleSidebar}
        onTouchMove={toggleSidebar}
        className={`sidebar-toggler ${props.darkMode ? 'dark' : ''}`}></div>
        <div className="sidebar-menu">
        {/* recent */}
          <div 
          onClick={() => handleClick('recent')}
          className={`category-container ${props.darkMode ? 'dark' : ''} ${props.heldCategory === 'recent' ? 'active' : ''}`}>
            <p className="category-name">recent</p>
            <GiBackwardTime />
          </div>
        {/* favorite */}
          <div 
          onClick={() => handleClick('favorite')}
          className={`category-container ${props.darkMode ? 'dark' : ''} ${props.heldCategory === 'favorite' ? 'active' : ''}`}>
            <p className="category-name">favorite</p>
            <MdFavorite />
          </div>
          <div className="line"></div>
        {/* All materials */}
          <div 
          onClick={() => handleClick('all')}
          className={`category-container ${props.darkMode ? 'dark' : ''} ${props.heldCategory === 'all' ? 'active' : ''}`}>
            <p className="category-name">all materials</p>
            <BsFiles />
          </div>
        {/* Notes */}
          <div 
          onClick={() => handleClick('note')}
          className={`category-container ${props.darkMode ? 'dark' : ''} ${props.heldCategory === 'note' ? 'active' : ''}`}>
            <p className="category-name">notes</p>
            <MdOutlineNoteAlt />
          </div>
        {/* Todos */}
          <div 
          onClick={() => handleClick('todo')}
          className={`category-container ${props.darkMode ? 'dark' : ''} ${props.heldCategory === 'todo' ? 'active' : ''}`}>
            <p className="category-name">todo</p>
            <TiTick />
          </div>
        {/* passwords */}
          <div 
          onClick={() => handleClick('pass')}
          className={`category-container ${props.darkMode ? 'dark' : ''} ${props.heldCategory === 'pass' ? 'active' : ''}`}>
            <p className="category-name">passwords</p>
            <MdPassword />
          </div>
          <div className="line"></div>
        {/* deleted */}
          <div 
          onClick={() => handleClick('deleted')}
          className={`category-container ${props.darkMode ? 'dark' : ''} ${props.heldCategory === 'deleted' ? 'active' : ''}`}>
            <p className="category-name">deleted</p>
            <FiTrash />
          </div>
        </div>
      </div>
    </div>
  );
}
