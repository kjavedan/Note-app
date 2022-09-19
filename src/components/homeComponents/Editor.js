import React from "react";
import EditorNav from "./editorComponents/EditorNav";
import EditorFootter from "./editorComponents/EditorFootter";
import EditorBody from "./editorComponents/EditorBody";

export default function Editor(props) {
  // save the elemnt data for us
  const [elementData, setElementData] = React.useState({});

  // open the more btn
  const [openOptions, setOpenOptions] = React.useState(false);

  // open the theme button
  const [openTheme, setOpenTheme] = React.useState(false);

  // state to display different messages to the use
  const [editorMessage, setEditorMessage] = React.useState({});

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
  // move the delted element to recyclebin and show the notification message in the main page
  function deleteElement(toBeDeleted, message, color) {
    props.setMessage({ text: message, color: color });
    props.setMainState((prevState) => {
      return prevState.filter((element) => {
        if (element.id !== toBeDeleted.id) {
          return element;
        }
        else if(message !== 'empty'){
          props.setRecyclebin([...props.recyclebin, elementData])
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
      deleteElement(elementData, "note moved to recyclebin", "lightcoral");
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
  // initilize elementData state in the useEffect base on the heldCategory
  function initilizeElementData(state){
    state.forEach((item) => {
      if (item.id === props.clickedElement) {
        setElementData(item);
      }
    });
  }
  // get the clicked element from the home page and set its info to element data in order to modify it
  React.useEffect(() => {
    if(props.heldCategory !=='deleted'){
     initilizeElementData(props.mainState)
    }
    else{
     initilizeElementData(props.recyclebin)
    }
  }, []);

  return (
    <div>
      <EditorNav 
      darkMode={props.darkMode} 
      backToHome={backToHome} 
      elementData={elementData} 
      setElementData={setElementData}
      openOptions={openOptions}
      setOpenOptions={setOpenOptions}
      setOpenTheme={setOpenTheme} 
      displayMessage={displayMessage}
      />
      <EditorBody
      darkMode={props.darkMode}
      elementData={elementData}
      setElementData={setElementData}
      editorMessage={editorMessage}
      setEditorMessage={setEditorMessage}
      setOpenOptions={setOpenOptions}
      setOpenTheme={setOpenTheme}
      editorType={props.editorType}
      heldCategory={props.heldCategory}
       />
      <EditorFootter
      darkMode={props.darkMode}
      setOpenOptions={setOpenOptions}
      openTheme={openTheme}
      setOpenTheme={setOpenTheme}
      elementData={elementData}
      setElementData={setElementData}
       />    
    </div>
  );
}
