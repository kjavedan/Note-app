import React from "react";
import NoteEditor from "./editorComponents/NoteEditor";
import ToDoEditor from "./editorComponents/ToDoEditor";
import { IoIosArrowBack, IoMdMore } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { MdOutlineColorLens } from "react-icons/md";

export default function Editor(props) {

  // save the elemnt data for us
  const [elementData, setElementData] = React.useState({});

  // state for saving todo tasks
  // const [tasks, setTasks] = React.useState()

  // open the theme button
  const [openTheme, setOpenTheme] = React.useState(false);

  // this two will be invoked in the more btn where the user can  save and delete element
  function save(){
    console.log('HOHO');
    saveElement();
  }

  function deleteEmptyElement(toBeDeleted){
    props.setMessage('empty')
    props.setMainState(prevState => {
      return prevState.filter(element => {
        if(element.id !== toBeDeleted.id){
          return element;
        }
      })
    })
  }

  function backToHome() {
    saveElement(elementData.category);
    props.setOpenEditor(false);
  }
  console.log('Editor rendered');

  function saveElement(category){
    if(category === 'note' && !elementData.title && !elementData.body){
      deleteEmptyElement(elementData); // deleting empty note
    }
    else if(category === 'todo' && !elementData.title && !elementData.tasks.length){
      deleteEmptyElement(elementData); // deleting empty todo
    }
    else{
      props.setMessage('save');
    
      // modify the main state with the new value of the current Element and put it on the top of the list
        const newArr = []
         props.mainState.map(element => {
          if(element.id == elementData.id){
            // checking the note value
              if(category === 'note'){
                 if(elementData.body !== element.body || elementData.title !== element.title){
                  newArr.unshift(elementData);
                }else{
                  newArr.push(elementData)
                }
              }else{
                if(elementData.tasks.length !== element.tasks.length || elementData.title !== element.title){
                  newArr.unshift(elementData);
                }else{
                  newArr.push(elementData)
                }
              }
          }else newArr.push(element);
        })
        props.setMainState(newArr)
    }
  }


  //first i need to change elementData tasks into tasks
  // then i need to change main state todo element to our modified element

  

  function handleTheme() {
    setOpenTheme((prevTheme) => !prevTheme);
  }
  React.useEffect(() => {
    props.mainState.forEach((item) => {
      if (item.id === props.clickedElement) {
        setElementData(item);
        // setTasks(item.tasks)
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
            <ToDoEditor setElementData={setElementData} elementData={elementData} tasks={elementData.tasks} darkMode={props.darkMode} />
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
