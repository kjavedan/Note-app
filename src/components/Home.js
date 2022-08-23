import React from "react";
import Masonry from "masonry-layout";
import Editor from "./homeComponents/Editor";
import ElementsList from "./homeComponents/ElementsList";
import { nanoid } from "nanoid";

export default function Home() {
  const date = new Date();

  const [darkMode, setDarkMode] = React.useState(false);

  const [mainState, setMainState] = React.useState([
    //object 1 -> to-do
    {
      id: nanoid(),
      title: "mytitle",
      theme: "default",
      date: date.toLocaleString(),
      category: "todo",
      tasks: [
        {
          id: nanoid(),
          body: "task one",
          isChecked: false,
        },
        {
          id: nanoid(),
          body: "task two",
          isChecked: false,
        },
        {
          id: nanoid(),
          body: "task three",
          isChecked: false,
        },
        {
          id: nanoid(),
          body: "task four",
          isChecked: true,
        },
      ],
    },

    //object 2 -> note
    {
      id: nanoid(),
      title: "noteTitle",
      body: "lets add more text so we can pass the 270px height limit hey my name is khaled javedan and i am 24 years old I am thinking about what is the best height for the note element one two three four five six seven eight",
      date: date.toLocaleString(),
      category: "note",
      theme: "default",
    },
    {
      id: nanoid(),
      title: "sick",
      body: "lets add more years old the note element one two three four five six seven eight",
      date: date.toLocaleString(),
      category: "note",
      theme: "default",
    },
    {
      id: nanoid(),
      title: "Another one",
      body: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi doloremque aut cum illo minus dolorem voluptate adipisci porro minima aliquam?",
      date: date.toLocaleString(),
      category: "note",
      theme: "default",
    },
    {
      id: nanoid(),
      title: "HoHo",
      body: " voluptate adipisci porro minima aliquam?",
      date: date.toLocaleString(),
      category: "note",
      theme: "default",
    },
  ]);
  // state to open the editor
  const [openEditor, setOpenEditor] = React.useState(false);

  // state to open the relative editor
  const [editorType, setEditorType] = React.useState();

  // state to save the clicked element id so we can open it in its relative editor
  const [clickedElement, setClickedElement] = React.useState();

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
      category: "note",
      theme: "default",
    }

  const newTodo = {
      id: nanoid(),
      title: "",
      theme: "default",
      date: date.toLocaleString(),
      category: "todo",
      tasks: [
        {
          id: nanoid(),
          body: "task one",
          isChecked: false,
        }
      ],
    }

  function createElement(category){
    if(category === 'note'){
      setMainState([newNote, ...mainState]);
      setClickedElement(newNote.id)
    }else{
      setMainState([newTodo, ...mainState])
      setClickedElement(newNote.id)
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
          openEditor={setOpenEditor}
          mainState={mainState}
          setMainState={setMainState}
          clickedElement={clickedElement}
        />
      ) : (
        <ElementsList
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          openClickedElement={openClickedElement}
          mainState={mainState}
          setMainState={setMainState}
          createElement={createElement}
        />
      )}
    </div>
  );
}
