import React from "react";
import NoteEditor from "./editorComponents/NoteEditor";
import ToDoEditor from "./editorComponents/ToDoEditor";
import { IoIosArrowBack, IoMdMore } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { MdOutlineColorLens, MdPassword, MdFavorite } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import { BsSave } from "react-icons/bs";

export default function Editor(props) {
  // save the elemnt data for us
  const [elementData, setElementData] = React.useState({});

  // open the more btn
  const [openOptions, setOpenOptions] = React.useState(false);

  // open the theme button
  const [openTheme, setOpenTheme] = React.useState(false);

  // state to display different messages to the use
  const [editorMessage, setEditorMessage] = React.useState({});

  // open the theme bar in the fotter on clicking the theme btn
  function handleTheme() {
    setOpenOptions(false);
    setOpenTheme((prevTheme) => !prevTheme);
  }
  // change the theme on clicking any color btn 
  function changeTheme(color) {
    setElementData({ ...elementData, theme: color });
    setOpenTheme(false);
  }
  // change the title of the element
  function changeTitle(e) {
    setElementData({ ...elementData, title: e.target.value });
  }
  // change element property (isFavorite, isPassword)
  function toggleProperty(propertyName, message){
    displayMessage(message)
    setElementData({...elementData, [propertyName]: !elementData[propertyName]})
  }
  // toggle more btn on click in the navbar
   function handleOptions() {
    setOpenTheme(false);
    setOpenOptions((prevState) => !prevState);
  }
  // add the element to favorites on clicking add to favorite in the more btn
  function addToFavorite(){
    toggleProperty('isFavorite', 'favorite')
  }
  // move the element out of favorites on clicking move out of favorite in the more btn
  function mooveOutFavorite(){
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
  // save the element and bring us back to home page
  function backToHome() {
    saveElement(elementData.category);
    props.setOpenEditor(false);
  }
  //if the element is not empty save the element base on its category
  function saveElement(category) {
    if (category === "note" && !elementData.title && !elementData.body) {
      deleteElement(elementData, "empty", "lightcoral"); // deleting empty note
    } else if (
      category === "todo" &&
      !elementData.title &&
      !elementData.tasks.length
    ) {
      deleteElement(elementData, "empty", "lightcoral"); // deleting empty todo
    } else {
      props.setMessage({ text: "saved", color: "lightgreen" });
      // modify the main state with the new value of the current Element and put it on the top of the list
      const newArr = [];
      props.mainState.map((element) => {
        if (element.id == elementData.id) {
          // checking the note value
          if (category === "note") {
            if (
              elementData.body !== element.body ||
              elementData.title !== element.title
            ) {
              newArr.unshift(elementData);
            } else {
              newArr.push(elementData);
            }
          } else {
            if (
              elementData.tasks.length !== element.tasks.length ||
              elementData.title !== element.title
            ) {
              newArr.unshift(elementData);
            } else {
              newArr.push(elementData);
            }
          }
        } else newArr.push(element);
      });
      props.setMainState(newArr);
    }
  }
  // delete the element and show the deleted message in the main page
  function deleteElement(toBeDeleted, message, color) {
    props.setMessage({ text: message, color: color });
    props.setMainState((prevState) => {
      return prevState.filter((element) => {
        if (element.id !== toBeDeleted.id) {
          return element;
        }
      });
    });
  }
  // notify the user with any action
  function displayMessage(value) {
    if (value === "save") {
      setEditorMessage({ message: "saved", color: "lightgreen" });
      saveElement(elementData.category);
    } 
    else if (value === "delete") {
      deleteElement(elementData, "note has been deleted", "lightcoral");
      props.setOpenEditor(false);
      return;
    }
    else if (value === "favorite") {
      setEditorMessage({
        message: "added to favorite",
        color: "lightgreen",
      });
    } 
    else if(value === 'uncheck-favorite'){
      setEditorMessage({
        message: "moved out from favorites",
        color: "lightgreen",
      });
    } 
    else if(value === 'pass') {
      setEditorMessage({
        message: "added to passwords",
        color: "lightgreen",
      });
    }
    else {
      setEditorMessage({
        message: "moved out from passwords",
        color: "lightgreen",
      });
    }
    setTimeout(() => {
      setEditorMessage({});
    }, 2000);
  }

  // close other open state such as more btn theme btn when the user try to type something
  function closeOpenStates() {
    setOpenOptions(false);
    setOpenTheme(false);
  }
  // get the clicked element from the home page and set its info to element data in order to modify it
  React.useEffect(() => {
    props.mainState.forEach((item) => {
      if (item.id === props.clickedElement) {
        setElementData(item);
      }
    });
  }, []);

  return (
    <div>
      <div className={`editor-nav ${props.darkMode ? "dark" : ""}`}>
        <div className="back-to-home" onClick={backToHome}>
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
            className={`more-options ${openOptions ? "open" : ""} ${
              props.darkMode ? "dark" : ""
            } `}
          >
          {/* message */}
            <div
              onClick={() => displayMessage("save")}
              className={`option ${props.darkMode ? "dark" : ""}`}
            >
              <span>Save</span> <BsSave />
            </div>
            {/* delete btn */}
            <div
              onClick={() => displayMessage("delete")}
              className={`option ${props.darkMode ? "dark" : ""}`}
            >
              <span>Delete</span> <FiTrash />
            </div>
            {/* add to favorite */}
            <div
              onClick={elementData.isFavorite ? mooveOutFavorite : addToFavorite}
              className={`option ${props.darkMode ? "dark" : ""}`}
            >
              <span>{elementData.isFavorite ? 'move out favorite' : 'add to favorite'}</span> <MdFavorite />
            </div>
            {/* add to password */}
            <div
              onClick={elementData.isPassword ? moveOutPassword : addToPasswords}
              className={`option ${props.darkMode ? "dark" : ""}`}
            >
              <span>{elementData.isPassword ? 'move out password' : 'add to password'}</span> <MdPassword />
            </div>
          </div>
        </div>
      </div>

      <div onClick={closeOpenStates} className="editor-main">
        <div
          style={{ backgroundColor: editorMessage.color }}
          className={`editor-main__message`}
        >
          {editorMessage ? editorMessage.message : ""}
        </div>

        <textarea
          placeholder="Title"
          type="text"
          className={`title ${props.darkMode ? "dark" : ""}`}
          value={elementData.title}
          onClick={closeOpenStates}
          onChange={changeTitle}
        ></textarea>

        <span
          onClick={closeOpenStates}
          className={`date ${props.darkMode ? "dark" : ""}`}
        >
          {elementData.date}
        </span>
        {/* editor body */}
        <div
          onClick={closeOpenStates}
          className={`body ${props.darkMode ? "dark" : ""}`}
        >
        {/* the body of the editor is different for note and todo
        therefore open it base on the element category */}
          {props.editorType === "note" ? (
            <NoteEditor
              setElementData={setElementData}
              elementData={elementData}
              body={elementData.body}
              setEditorMessage={setEditorMessage}
              darkMode={props.darkMode}
            />
          ) : (
            <ToDoEditor
              setElementData={setElementData}
              elementData={elementData}
              tasks={elementData.tasks}
              setEditorMessage={setEditorMessage}
              darkMode={props.darkMode}
            />
          )}
        </div>
        {/* ---------- */}
      </div>

      <div className={`editor-footer ${props.darkMode ? "dark" : ""}`}>
        <div className="theme-btn" onClick={handleTheme}>
          <MdOutlineColorLens />
        </div>
        <div className="theme-container">
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
    </div>
  );
}
