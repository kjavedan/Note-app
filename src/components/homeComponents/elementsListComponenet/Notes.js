import React from "react";
import Masonry from "masonry-layout";
import Note from "./Note";
import ToDo from "./ToDo";
import { AiOutlineWarning, AiOutlineFileDone } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";

export default function Notes(props) {

  const [timer, setTimer] = React.useState(0);

  const intervalRef = React.useRef(null);

  console.log(timer)
  
   function selectElement(){
    console.log('hi')
  }

  function startTimer(){
    if(intervalRef.current) return;
    intervalRef.current = setInterval(()=>{
      setTimer(prevTime => prevTime + 1)
    },100)
  }
  function stopTimer(){
    if(intervalRef.current){
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setTimer(0);
    }
  }

  React.useEffect(()=>{
      if(timer > 10){
        props.setModificationMode(true);
        setTimer(0);
      }
    })

  React.useEffect(() => {
    const grid = document.querySelector(".home-notes");
    const masonry = new Masonry(grid, {
      itemSelector: ".home-notes__note",
      gutter: 10,
    });
  });

 

  /* I have to create a function that fires when a user hold an element
     for more than 1s -> open the modification Mode
     change the property of isHeld of that specefic element and add to 
     the counter
     1.get id
     2.itterate over state
     3.change isHeld of that element
     4.now we will check modification mode if its true we will fire
     another onClick function for the element where we will change
     the isHeld property of that item and increase the counter by 1
  */ 

     // we need to function
     // 1. openModificationMode() -> will work only if the modification
     // mode is false

     // 2. selectElementInModificatiomMode() -> will work only if the 
     // modification mode is true

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
          modificationMode={props.modificationMode}
          startTimer={startTimer}
          stopTimer={stopTimer}
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
          modificationMode={props.modificationMode}
          startTimer={startTimer}
          stopTimer={stopTimer}
        />
      );
    }
  });

  return (
    <div>
      <div style={{ backgroundColor: props.message.color }} className="message">
        {props.message.text}
      </div>
      <div className={`home-notes ${props.darkMode ? "dark" : ""}`}>
        {elements}
      </div>
    </div>
  );
}
