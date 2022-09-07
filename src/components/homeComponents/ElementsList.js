import React from "react";
import Nav from "./elementsListComponenet/Nav";
import Modyfire from "./elementsListComponenet/Modyfire";
import Sidebar from "./elementsListComponenet/Sidebar";
import Notes from "./elementsListComponenet/Notes";

export default function ElementsList(props) {
  // the elements list component is responsible for many things
  // 1. <Nav/> ->f iring the createElement method from the nav in order to create new element
  // 2. <Modyfire/> -> modyfing the main state (delete, add to favorite, add to pass and change theme)
  // 3. <Notes/> -> display the received elements from mainState and display them on the screen
  ///4. <Sidebar/> -> display elements base on certain conditions for instance different categories
  return (
    <div>
      <Nav
      darkMode={props.darkMode}
      setDarkMode={props.setDarkMode}
      createElement={props.createElement}
      />
      <Modyfire
      darkMode={props.darkMode}
      mainState={props.mainState}
      setMainState={props.setMainState}
      modificationMode={props.modificationMode}
      setModificationMode={props.setModificationMode}
       />
      <Notes
      darkMode={props.darkMode}
      mainState={props.mainState}
      setMainState={props.setMainState}
      openClickedElement={props.openClickedElement}
      message={props.message}
      modificationMode={props.modificationMode}
      setModificationMode={props.setModificationMode}
      />
      <Sidebar 
      darkMode={props.darkMode} 
      mainState={props.mainState} 
      modificationMode={props.modificationMode}
      setModificationMode={props.setModificationMode}
      />
    </div>
  );
}
