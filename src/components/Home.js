import React from "react";
import Masonry from "masonry-layout";
import Editor from "./homeComponents/Editor";
import ElementsList from "./homeComponents/ElementsList";
import { nanoid } from "nanoid";

export default function Home() {

    const date = new Date()
    console.log(date.toLocaleString())

  const[mainState, setMainState] = React.useState ([
    //object 1 -> to-do
    {
    id: nanoid,
    title : 'mytitle',
    theme : 'default',
    date : date.toLocaleString(),
    category : 'todo',
    tasks : 
      [{
        id: nanoid(),
        body : 'task one',
        isChecked : false,
      },
      {
        id : nanoid(),
        body : 'task 2',
        isChecked : false
      }],
    accomplishedTasks : 
      [{
        id: nanoid(),
        body : 'task three',
        isChecked : true,
      },
      {
        id : nanoid(),
        body : 'task 4',
        isChecked : true
      }]   
  },

  //object 2 -> note
  {
    id: nanoid(),
    title : 'noteTitle',
    body : 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, consequatur!',
    date : date.toLocaleString(),
    category : 'note',
    theme : 'default'
  }
])


  const [darkMode, setDarkMode] = React.useState(false);

  // state to open the editor
  const [openEditor, setOpenEditor] = React.useState(false);

  // state to open the relative editor
  const [editorType, setEditorType] = React.useState();

  function openRelativeEditor(type) {
    setEditorType(type);
    setOpenEditor((prevState) => !prevState);
  }

  return (
    <div className={`home ${darkMode ? "dark" : ""}`}>
      {openEditor ? (
        <Editor
          darkMode={darkMode}
          editorType={editorType}
          openEditor={setOpenEditor}
          mainState = {mainState}
          setMainState = {setMainState}
        />
      ) : (
        <ElementsList
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          openRelativeEditor={openRelativeEditor}
          mainState = {mainState}
          setMainState = {setMainState}
        />
      )}
    </div>
  );
}
