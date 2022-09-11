import React from 'react'
import { IoIosArrowBack, IoMdMore } from "react-icons/io";
import { MdOutlineColorLens, MdPassword, MdFavorite } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { BsSave } from "react-icons/bs";

export default function EditorNav(props) {

   // change element property (isFavorite, isPassword)
  function toggleProperty(propertyName, message){
    props.displayMessage(message)
    props.setElementData({...props.elementData, [propertyName]: !props.elementData[propertyName]})
  }
  // toggle more btn on click in the navbar
   function handleOptions() {
    props.setOpenTheme(false);
    props.setOpenOptions((prevState) => !prevState);
  }
  // add the element to favorites on clicking add to favorite in the more btn
  function addToFavorite(){
    toggleProperty('isFavorite', 'favorite')
  }
  // move the element out of favorites on clicking move out of favorite in the more btn
  function moveOutFavorite(){
    toggleProperty('isFavorite', 'uncheck-favorite')
  }
   // add the element to passwords on clicking add to passwords in the more btn
  function addToPasswords(){
   toggleProperty('isPassword', 'pass')
  }
   // move the element out of passwords on clicking move out of passwords in the more btn
  function moveOutPassword(){
   toggleProperty('isPassword', 'uncheck-password')
  }
  return (
      <div className={`editor-nav ${props.darkMode ? "dark" : ""}`}>
        <div className="back-to-home" onClick={props.backToHome}>
          <span className="back-to-home__icon">
            <IoIosArrowBack />
          </span>
          <span>Home</span>
        </div>
        <div className="more-container">
          <div onClick={handleOptions} className="more">
            <IoMdMore />
          </div>
          <div
            className={`more-options ${props.openOptions ? "open" : ""} ${
              props.darkMode ? "dark" : ""
            } `}
          >
          {/* message */}
            <div
              onClick={() => props.displayMessage("save")}
              className={`option ${props.darkMode ? "dark" : ""}`}
            >
              <span>Save</span> <BsSave />
            </div>
            {/* delete btn */}
            <div
              onClick={() => props.displayMessage("delete")}
              className={`option ${props.darkMode ? "dark" : ""}`}
            >
              <span>Delete</span> <FiTrash />
            </div>
            {/* add to favorite */}
            <div
              onClick={props.elementData.isFavorite ? moveOutFavorite : addToFavorite}
              className={`option ${props.darkMode ? "dark" : ""}`}
            >
              <span>{props.elementData.isFavorite ? 'move out favorite' : 'add to favorite'}</span> <MdFavorite />
            </div>
            {/* add to password */}
            <div
              onClick={props.elementData.isPassword ? moveOutPassword : addToPasswords}
              className={`option ${props.darkMode ? "dark" : ""}`}
            >
              <span>{props.elementData.isPassword ? 'move out password' : 'add to password'}</span> <MdPassword />
            </div>
          </div>
        </div>
      </div>
  )
}
