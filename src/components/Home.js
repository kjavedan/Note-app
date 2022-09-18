import React from "react";
import Editor from "./homeComponents/Editor";
import ElementsList from "./homeComponents/ElementsList";
import { nanoid } from "nanoid";

export default function Home({ mainState, setMainState }) {
  const date = new Date();

  function getShortDate() {
    const option1 = { month: "short" };
    const option2 = { weekday: "short" };
    const shortMonth = new Intl.DateTimeFormat("en-US", option1).format(date);
    const day = date.getDate();
    const dayName = new Intl.DateTimeFormat("en-US", option2).format(date);
    const shortDate = dayName + " " + day + " " + shortMonth;
    return shortDate;
  }

  // state to modify the home page (changing themes, delete and etc..)
  const [modificationMode, setModificationMode] = React.useState(false);

  // state to change the app theme
  const [darkMode, setDarkMode] = React.useState(false);

  // state to open the editor
  const [openEditor, setOpenEditor] = React.useState(false);

  // state to open the relative editor
  const [editorType, setEditorType] = React.useState();

  // state to save the clicked element id so we can open it in its relative editor
  const [clickedElement, setClickedElement] = React.useState();

  // state to notify the user with happening changes
  const [message, setMessage] = React.useState({});

  // state for holding certain categories in the sidebar 
  const [heldCategory, setHeldCategory] = React.useState('recent');

  // state for holding deleted elements
  const [recyclebin, setRecyclebin] = React.useState(
    JSON.parse(localStorage.getItem("recyclebin"))||[])

  // getting the recyclebin from the local storage
  React.useEffect(() => {
    localStorage.setItem("recyclebin", JSON.stringify(recyclebin));
  }, [recyclebin]);

  // hide the message after 3 seconds
  React.useEffect(() => {
    setTimeout(() => {
      setMessage({});
    }, 3000);
  }, [openEditor]);
  
  // we open the relative editor for the clicked or created item by checking its category
  function openClickedElement(id, category) {
    setClickedElement(id);
    setEditorType(category);
    setOpenEditor((prevState) => !prevState);
  }

  // new note properties
  const newNote = {
    id: nanoid(),
    title: "",
    body: "",
    time: date.getTime(),
    date: date.toLocaleString(),
    shortDate: getShortDate(),
    category: "note",
    isHeld: false,
    isHide: false,
    isPassword: false,
    isFavorite: false,
    theme: "default",
  };

  // new todo properties
  const newTodo = {
    id: nanoid(),
    title: "",
    theme: "default",
    time: date.getTime(),
    date: date.toLocaleString(),
    shortDate: getShortDate(),
    category: "todo",
    isHeld: false,
    isHide: false,
    isPassword: false,
    isFavorite: false,
    tasks: [],
  };

  // check the clicked btn category and create new element base on that
  function createElement(category) {
    if (category === "note") {
      setMainState([newNote, ...mainState]);
      setClickedElement(newNote.id);
    } else {
      setClickedElement(newTodo.id);
      setMainState([newTodo, ...mainState]);
    }
    setEditorType(category);
    setOpenEditor((prevState) => !prevState);
  }
  // check the openEditor state and display elementslist or the editor according the value of the state
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
          recyclebin={recyclebin}
          setRecyclebin={setRecyclebin}
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
          modificationMode={modificationMode}
          setModificationMode={setModificationMode}
          heldCategory={heldCategory}
          setHeldCategory={setHeldCategory}
          recyclebin={recyclebin}
          setRecyclebin={setRecyclebin}
        />
      )}
    </div>
  );
}
