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
        openRelativeEditor={props.openRelativeEditor}
      />

      <Notes darkMode={props.darkMode} />

      <Sidebar darkMode={props.darkMode} />
    </div>
  );
}
