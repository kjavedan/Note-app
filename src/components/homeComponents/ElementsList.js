import React from "react";
import Nav from "./elementsListComponenet/Nav";
import Sidebar from "./elementsListComponenet/Sidebar";
import Notes from "./elementsListComponenet/Notes";

export default function ElementsList(props) {
  return (
    <div>
      <Nav
        darkMode={props.darkMode}
        setDarkMode={props.setDarkMode}
        openClickedElement={props.openClickedElement}
      />

      <Notes 
      darkMode={props.darkMode}
      mainState = {props.mainState}
      openClickedElement={props.openClickedElement}
      />

      <Sidebar darkMode={props.darkMode} 
      mainState = {props.mainState}
      />
    </div>
  );
}
