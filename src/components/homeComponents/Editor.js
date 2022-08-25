import React from "react";
import NoteEditor from "./editorComponents/NoteEditor";
import ToDoEditor from "./editorComponents/ToDoEditor";
import { IoIosArrowBack, IoMdMore } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { MdOutlineColorLens } from "react-icons/md";

export default function Editor(props) {

  // here we can get the data from the inputs and assign
  // them to element data  then on clicking certain btn we modify the main state
  // it would be more efficient but it will cuse us some bad user experience because
  // there is high chance that the element not be saved if something unexpected happens




  // save the elemnt data for us
  const [elementData, setElementData] = React.useState({});

  // open the theme button
  const [openTheme, setOpenTheme] = React.useState(false);

  // this two will be invoked in the more btn where the user can  save and delete element
  function save(){
    console.log('HOHO');
    saveElement();
  }
  function deleteElement(){
    console.log('DELETE')
  }

  function backToHome() {
    props.openEditor(false);
    saveElement();
  }

  function saveElement(){
     if(elementData.category === 'note' && !elementData.title && !elementData.body){
      deleteEmptyNote()
    }
    else if(elementData.category === 'todo' && !elementData.title && !elementData.tasks.height){
      deleteEmptyTodo()
    }
    else{
      props.setMessage('save');
      // modify the main state with the new value of the current Element
      props.setMainState(prevState => {
        return prevState.map(element => {
          if(element.id == elementData.id){
            console.log(elementData)
            return elementData;
          }else return element;
        })
      })
    }
  }

  function deleteEmptyNote(){
    props.setMessage('empty-note')
  }

  function deleteEmptyTodo(){
    props.setMessage('empty-todo')
  }

  function handleTheme() {
    setOpenTheme((prevTheme) => !prevTheme);
  }
 // here we are getting the current Element from main state
 // to save the modified element we can do :
 // 1- modifying the state on click back to home btn ->pros: faster - less memory consomption || cons: bad user experience
 // 2- modifying the main state directly on any change happens -> pros: good user experience || cons: memory consomption
 // 3. better solution is that we add another btn for saving as well so we can modify from to places
  React.useEffect(() => {
    props.mainState.forEach((item) => {
      if (item.id === props.clickedElement) {
        setElementData(item);
      }
    });
  }, []);

  function changeTitle(e) {
    setElementData({...elementData, title : e.target.value})
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
          value={elementData.title}
          onChange={changeTitle}
        ></textarea>
        <span className={`date ${props.darkMode ? "dark" : ""}`}>
          {elementData.date}
        </span>
        {/* editor body */}
        <div className={`body ${props.darkMode ? "dark" : ""}`}>
          {props.editorType === "note" ? (
            <NoteEditor setElementData={setElementData} elementData={elementData} body={elementData.body} darkMode={props.darkMode} />
          ) : (
            <ToDoEditor tasks={elementData.tasks} darkMode={props.darkMode} />
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
