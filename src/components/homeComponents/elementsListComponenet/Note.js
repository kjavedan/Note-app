import React from "react";
import { MdFormatLineSpacing } from "react-icons/md";

export default function Note(props) {

  function changeTheme(color){
    let style = {};
      if(color !=='default'){
          return style = {
          backgroundColor : color
        }     
      }else return style;
    }
   
  
  return (
    <div
      style={changeTheme(props.theme)}
      onClick={() => props.openClickedElement(props.id, props.category)}
      className={`home-notes__note ${props.darkMode ? "dark" : ""}`}
    >
      <h4 className={`note-title ${props.darkMode ? "dark" : ""}`}>
        {props.title}
      </h4>
      <p className={`note-text ${props.darkMode ? "dark" : ""}`}>
        {props.body}
      </p>
      <div className={`note-info ${props.darkMode ? "dark" : ""}`}>
        <span className="note-date">{props.shortDate}</span>
        <span className="note-category">{props.category}</span>
      </div>
    </div>
  );
}
