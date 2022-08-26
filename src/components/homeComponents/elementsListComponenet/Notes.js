import React from "react";
import Masonry from "masonry-layout";
import Note from "./Note";
import ToDo from "./ToDo";
import { AiOutlineWarning,  AiOutlineFileDone } from 'react-icons/ai'
import { IoMdDoneAll  } from 'react-icons/io'

export default function Notes(props) {
  React.useEffect(() => {
    const grid = document.querySelector(".home-notes");
    const masonry = new Masonry(grid, {
      itemSelector: ".home-notes__note",
      gutter: 10,
    });
  });

  // display the elements from the main state
  const elements = props.mainState.map((item) => {
    if (item.category === "note") {
      return (
        <Note
          openClickedElement={props.openClickedElement}
          key={item.id}
          darkMode={props.darkMode}
          id={item.id}
          body={item.body}
          theme={item.theme}
          date={item.date}
          shortDate={item.shortDate}
          title={item.title}
          category={item.category}
        />
      );
    } else {
      return (
        <ToDo
          openClickedElement={props.openClickedElement}
          key={item.id}
          darkMode={props.darkMode}
          id={item.id}
          title={item.title}
          tasks={item.tasks}
          theme={item.theme}
          category={item.category}
          date={item.date}
          shortDate={item.shortDate}
        />
      );
    }
  });
  let style = {};
 
  function getMessage(){
    if(props.message === 'save'){
      style.backgroundColor = 'lightgreen'
      style.width = '80px'
      return 'saved'
    }
    else{
      style.backgroundColor = 'lightcoral'
      return "empty"
    } 
  }
  
  const message = getMessage();
  

  return (
    <div>
     {props.message && <div className="message" style={style}>{message === 'empty' ? <AiOutlineWarning /> : <IoMdDoneAll />}{message}</div>}
      <div className={`home-notes ${props.darkMode ? "dark" : ""}`}>
        {elements}
      </div>
    </div>
  );
}
