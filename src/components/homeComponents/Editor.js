import React from "react";
import NoteEditor from "./editorComponents/NoteEditor";
import ToDoEditor from "./editorComponents/ToDoEditor";
import { IoIosArrowBack, IoMdMore } from "react-icons/io";
import { FiShare } from "react-icons/fi";
import { MdOutlineColorLens, MdPassword, MdFavorite } from "react-icons/md";
import { BsSave} from "react-icons/bs";
import { FiTrash } from "react-icons/fi";

export default function Editor(props) {

  // save the elemnt data for us
  const [elementData, setElementData] = React.useState({});

  // open the more btn 
  const [openOptions, setOpenOptions] = React.useState(false)

  // open the theme button
  const [openTheme, setOpenTheme] = React.useState(false);

  
  function handleTheme() {
    setOpenOptions(false)
    setOpenTheme((prevTheme) => !prevTheme);
  }

  function changeTheme(color){
    setElementData({...elementData, theme : color})
    setOpenTheme(false)
  }
  

  function changeTitle(e) {
    setElementData({...elementData, title : e.target.value})
  }

  function backToHome() {
    saveElement(elementData.category);
    props.setOpenEditor(false);
  }

  function saveElement(category){
    if(category === 'note' && !elementData.title && !elementData.body){
      deleteElement(elementData, 'empty'); // deleting empty note
    }
    else if(category === 'todo' && !elementData.title && !elementData.tasks.length){
      deleteElement(elementData, 'empty'); // deleting empty todo
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

    function deleteElement(toBeDeleted, message){
    props.setMessage(message)
    props.setMainState(prevState => {
      return prevState.filter(element => {
        if(element.id !== toBeDeleted.id){
          return element;
        }
      })
    })
  }
  
  function handleOptions(){
    console.log(elementData.id);
    setOpenTheme(false)
    setOpenOptions(prevState => !prevState)
  }

  function closeOpenStates(){
    setOpenOptions(false)
    setOpenTheme(false)
  }

  React.useEffect(() => {
    props.mainState.forEach((item) => {
      if (item.id === props.clickedElement) {
        setElementData(item);
        // setTasks(item.tasks)
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
        <div 
        onClick={handleOptions}
        className="more-container">

          <div className="share">
            <FiShare />
          </div>
          <div className="more">
            <IoMdMore />
          </div>
          <div className={`more-options ${openOptions ? 'open' : ''} ${props.darkMode ? 'dark' : ''} `}>
            <div className={`option ${props.darkMode ? 'dark' : ''}`}> <span>Save</span> <BsSave /></div>
            <div className={`option ${props.darkMode ? 'dark' : ''}`}> <span>Delete</span> <FiTrash /></div>
            <div className={`option ${props.darkMode ? 'dark' : ''}`}> <span>Add to favorite</span> <MdFavorite /></div>
            <div className={`option ${props.darkMode ? 'dark' : ''}`}> <span>Add to passwords</span> <MdPassword /></div>
          </div>

        </div>

      </div>
      <div 
      onClick={closeOpenStates}
      className="editor-main">
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
        className={`date ${props.darkMode ? "dark" : ""}`}>
          {elementData.date}
        </span>
        {/* editor body */}
        <div 
        onClick={closeOpenStates}
        className={`body ${props.darkMode ? "dark" : ""}`}>
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
          <div onClick={()=>changeTheme('default')} className={`color default ${openTheme ? "show" : ""}`}><div className="line"></div></div>
          <span onClick={()=>changeTheme('#ffbbc2')} className={`color color-1 ${openTheme ? "show" : ""}`}></span>
          <span onClick={()=>changeTheme('#e6f0fd')} className={`color color-2 ${openTheme ? "show" : ""}`}></span>
          <span onClick={()=>changeTheme('#d9d9d9')} className={`color color-3 ${openTheme ? "show" : ""}`}></span>
          <span onClick={()=>changeTheme('#ffe598')} className={`color color-4 ${openTheme ? "show" : ""}`}></span>
          <span onClick={()=>changeTheme('#ffe6d6')} className={`color color-5 ${openTheme ? "show" : ""}`}></span>
          <span onClick={()=>changeTheme('#b5f7bb')} className={`color color-6 ${openTheme ? "show" : ""}`}></span>
          <span onClick={()=>changeTheme('lightcoral')} className={`color color-7 ${openTheme ? "show" : ""}`}></span>
        </div>
      </div>
    </div>
  );
}
