import React from "react";
import Masonry from "masonry-layout";
import Editor from "./homeComponents/Editor";
import ElementsList from "./homeComponents/ElementsList";
import { nanoid } from "nanoid";
import { IoMdHeartEmpty, IoMdReturnLeft } from "react-icons/io";

export default function Home({mainState, setMainState}) {

  const date = new Date();


  function getShortDate(){
    const option1 = { month: 'short'};
    const option2 = { weekday : 'short'}
    const shortMonth = new Intl.DateTimeFormat('en-US', option1).format(date);
    const day = date.getDate();
    const dayName =  new Intl.DateTimeFormat('en-US', option2).format(date);
    const shortDate =  dayName + ' ' + day + ' ' + shortMonth;
    return shortDate;
  }
  console.log('home rendered')
  const [darkMode, setDarkMode] = React.useState(false);

  // state to open the editor
  const [openEditor, setOpenEditor] = React.useState(false);

  // state to open the relative editor
  const [editorType, setEditorType] = React.useState();

  // state to save the clicked element id so we can open it in its relative editor
  const [clickedElement, setClickedElement] = React.useState();

  // state to notify the user with happening changes
  const [message, setMessage] = React.useState();

  // clear the notification message after 3 seconds and delete empty elements
  // bug -> it deletes the element before the user can enter any input
  // solution -> send the checking to editor page and send the result for the home page
  React.useEffect(()=>{
    setTimeout(()=>{
      setMessage();
    },3000)
  }, [openEditor])

  console.log(mainState)

  function openClickedElement(id, category) {
    setClickedElement(id);
    setEditorType(category);
    setOpenEditor((prevState) => !prevState);
  }

  const newNote =  {
      id: nanoid(),
      title: "",
      body: "",
      date: date.toLocaleString(),
      shortDate : getShortDate(),
      category: "note",
      theme: "default",
    }

  const newTodo = {
      id: nanoid(),
      title: "",
      theme: "default",
      date: date.toLocaleString(),
      shortDate : getShortDate(),
      category: "todo",
      tasks: [
        
      ],
    }

  function createElement(category){
    if(category === 'note'){
      setMainState([newNote, ...mainState]);
      setClickedElement(newNote.id)
    }else{
      setClickedElement(newTodo.id)
      setMainState([newTodo, ...mainState])
    }
    setEditorType(category);
    setOpenEditor((prevState) => !prevState);
  }

  return (
    <div className={`home ${darkMode ? "dark" : ""}`}>
      {openEditor ? (
        <Editor
          darkMode={darkMode}
          editorType={editorType}
          setOpenEditor={setOpenEditor}
          mainState={mainState}
          setMainState={setMainState}
          clickedElement={clickedElement}
          setMessage={setMessage}
        />
      ) : (
        <ElementsList
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          openClickedElement={openClickedElement}
          mainState={mainState}
          setMainState={setMainState}
          createElement={createElement}
          message={message}
        />
      )}
    </div>
  );
}
