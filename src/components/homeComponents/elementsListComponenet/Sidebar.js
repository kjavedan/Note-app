import React from "react";
import { GiBackwardTime } from 'react-icons/gi'
import { MdPassword, MdFavorite, MdOutlineNoteAlt } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { TiTick } from "react-icons/ti";
import { BsFiles } from "react-icons/bs";


export default function Sidebar(props) {
  return (
    <div className={`home-sidebar ${props.darkMode ? 'dark' : ''}`}>
      <div className={`sidebar-toggler ${props.darkMode ? 'dark' : ''}`}></div>
      <div className="sidebar-menu">
      {/* recent */}
        <div className={`category-container ${props.darkMode ? 'dark' : ''}`}>
          <p className="category-name">recent</p>
          <GiBackwardTime />
        </div>
      {/* favorite */}
        <div className={`category-container ${props.darkMode ? 'dark' : ''}`}>
          <p className="category-name">favorite</p>
          <MdFavorite />
        </div>
        <div className="line"></div>
      {/* All materials */}
        <div className={`category-container ${props.darkMode ? 'dark' : ''}`}>
          <p className="category-name">all materials</p>
          <BsFiles />
        </div>
      {/* Notes */}
        <div className={`category-container ${props.darkMode ? 'dark' : ''}`}>
          <p className="category-name">notes</p>
          <MdOutlineNoteAlt />
        </div>
      {/* Todos */}
        <div className={`category-container ${props.darkMode ? 'dark' : ''}`}>
          <p className="category-name">todos</p>
          <TiTick />
        </div>
      {/* passwords */}
        <div className={`category-container ${props.darkMode ? 'dark' : ''}`}>
          <p className="category-name">passwords</p>
          <MdPassword />
        </div>
        <div className="line"></div>
      {/* deleted */}
        <div className={`category-container ${props.darkMode ? 'dark' : ''}`}>
          <p className="category-name">deleted</p>
          <FiTrash />
        </div>
      </div>
    </div>
  );
}
