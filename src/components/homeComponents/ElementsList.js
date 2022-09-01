import React from "react";
import Nav from "./elementsListComponenet/Nav";
import Modyfire from "./elementsListComponenet/Modyfire";
import Sidebar from "./elementsListComponenet/Sidebar";
import Notes from "./elementsListComponenet/Notes";

export default function ElementsList(props) {
  return (
    <div>
      <Nav
      darkMode={props.darkMode}
      setDarkMode={props.setDarkMode}
      createElement={props.createElement}
      />
      <Modyfire
      darkMode={props.darkMode}
      modificationMode={props.modificationMode}
      setModificationMode={props.setModificationMode}
       />
      <Notes
      darkMode={props.darkMode}
      mainState={props.mainState}
      openClickedElement={props.openClickedElement}
      message={props.message}
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
