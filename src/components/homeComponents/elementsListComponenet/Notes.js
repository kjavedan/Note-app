import React from "react";
import Masonry from "masonry-layout";
import Note from "./Note";
import ToDo from "./ToDo";

export default function Notes(props) {
  React.useEffect(() => {
    const grid = document.querySelector(".home-notes");
    const masonry = new Masonry(grid, {
      itemSelector: ".home-notes__note",
      gutter: 10,
    });
  });

  return (
    <div className={`home-notes ${props.darkMode ? "dark" : ""}`}>
      <Note darkMode={props.darkMode} />
      <ToDo darkMode={props.darkMode} />
    </div>
  );
}
