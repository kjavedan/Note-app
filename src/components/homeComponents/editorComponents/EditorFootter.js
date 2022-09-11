import React from 'react'
import { MdOutlineColorLens } from "react-icons/md";

export default function EditorFootter(props) {
  // open the theme bar in the fotter on clicking the theme btn
  function handleTheme() {
    props.setOpenOptions(false);
    props.setOpenTheme((prevTheme) => !prevTheme);
  }
  // change the theme on clicking any color btn 
  function changeTheme(color) {
    props.setElementData({ ...props.elementData, theme: color });
    props.setOpenTheme(false);
  }
  return (
     <div className={`editor-footer ${props.darkMode ? "dark" : ""}`}>
        <div className="theme-btn" onClick={handleTheme}>
          <MdOutlineColorLens />
        </div>
        <div className="theme-container">
          <div
            onClick={() => changeTheme("default")}
            className={`color default ${props.openTheme ? "show" : ""}`}
          >
            <div className="line"></div>
          </div>
          <span
            onClick={() => changeTheme("#ffbbc2")}
            className={`color color-1 ${props.openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => changeTheme("#e6f0fd")}
            className={`color color-2 ${props.openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => changeTheme("#d9d9d9")}
            className={`color color-3 ${props.openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => changeTheme("#ffe598")}
            className={`color color-4 ${props.openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => changeTheme("#ffe6d6")}
            className={`color color-5 ${props.openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => changeTheme("#b5f7bb")}
            className={`color color-6 ${props.openTheme ? "show" : ""}`}
          ></span>
          <span
            onClick={() => changeTheme("lightcoral")}
            className={`color color-7 ${props.openTheme ? "show" : ""}`}
          ></span>
        </div>
      </div>
  )
}
