import React from "react";
import Nav from "./elementsListComponenet/Nav";
import Sidebar from "./elementsListComponenet/Sidebar";
import Notes from "./elementsListComponenet/Notes";

export default function ElementsList(props) {

  console.log('elementList rendered')
  console.log(props)
  return (
    <div>
      <Nav
        darkMode={props.darkMode}
        setDarkMode={props.setDarkMode}
        createElement={props.createElement}
        
      />

      <Notes
        darkMode={props.darkMode}
        mainState={props.mainState}
        openClickedElement={props.openClickedElement}
        message={props.message}
      />

      <Sidebar darkMode={props.darkMode} mainState={props.mainState} />
    </div>
  );
}
