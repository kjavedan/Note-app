import React from "react";
import NoteEditor from "./editorComponents/NoteEditor";
import ToDoEditor from "./editorComponents/ToDoEditor";
import { IoIosArrowBack, IoMdMore } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { MdOutlineColorLens } from "react-icons/md";

export default function Editor(props) {
  const [elementData, setElementData] = React.useState({});

  const [title, setTitle] = React.useState();

  const [openTheme, setOpenTheme] = React.useState(false);

  function backToHome() {
    props.openEditor(false);
  }

  function handleTheme() {
    setOpenTheme((prevTheme) => !prevTheme);
  }

  React.useEffect(() => {
    props.mainState.forEach((item) => {
      if (item.id === props.clickedElement) {
        setElementData(item);
        setTitle(item.title);
      }
    });
  }, []);

  function changeTitle(e) {
    setTitle(e.target.value);
  }

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
          <div className="share">
            <FiShare />
          </div>
          <div className="more">
            <IoMdMore />
          </div>
        </div>
      </div>
      <div className="editor-main">
        <textarea
          placeholder="Title"
          type="text"
          className={`title ${props.darkMode ? "dark" : ""}`}
          value={title}
          onChange={changeTitle}
        ></textarea>
        <span className={`date ${props.darkMode ? "dark" : ""}`}>
          {elementData.date}
        </span>
        {/* editor body */}
        <div className={`body ${props.darkMode ? "dark" : ""}`}>
          {props.editorType === "note" ? (
            <NoteEditor body={elementData.body} darkMode={props.darkMode} />
          ) : (
            <ToDoEditor darkMode={props.darkMode} />
          )}
        </div>
        {/* ---------- */}
      </div>
      <div className={`editor-footer ${props.darkMode ? "dark" : ""}`}>
        <div className="theme-btn" onClick={handleTheme}>
          <MdOutlineColorLens />
        </div>
        <div className="theme-container">
          <span className={`color color-1 ${openTheme ? "show" : ""}`}></span>
          <span className={`color color-2 ${openTheme ? "show" : ""}`}></span>
          <span className={`color color-3 ${openTheme ? "show" : ""}`}></span>
          <span className={`color color-4 ${openTheme ? "show" : ""}`}></span>
          <span className={`color color-5 ${openTheme ? "show" : ""}`}></span>
        </div>
      </div>
    </div>
  );
}
