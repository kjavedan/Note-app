import React from "react";
import Masonry from "masonry-layout";
import Note from "./Note";
import ToDo from "./ToDo";
import { AiOutlineWarning, AiOutlineFileDone } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";

export default function Notes(props) {

  // state for counting the time the user hold an element so we can open the modyfire
  const [timer, setTimer] = React.useState(0);

  // ref hook in order to clean the set interval function 
  const intervalRef = React.useRef(null);

  // start timer fires when the userr hold the element
  function startTimer(){
    if(intervalRef.current) return;
    intervalRef.current = setInterval(()=>{
      setTimer(prevTime => prevTime + 1)
    },100)
  }
  // stop timer fires when the user lift his/her thumeb from the element
  function stopTimer(){
    if(intervalRef.current){
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setTimer(0);
    }
  }
  // select Element function will only work when we are in modification Mode
   function selectElement(id){
    props.setMainState(prevState =>{
      return prevState.map(element =>{
        if(element.id === id){
          return {...element, isHeld : !element.isHeld}
        }else{
          return element;
        }
      })
    })
  }
//---------------------------------------------------------------------
// functions to do some inline styling for both Note and ToDo element
  function changeTheme(color) {
    let style = {};
    if (color !== "default") {
      return (style = {
        backgroundColor: color,
      });
    } else return style;
  }
  function changeTextColor(color) {
    let style = {};
    if (color === "default" && props.darkMode) {
      return (style = {
        color: "#FFF",
      });
    }
  }
//-----------------------------------------------------------------------
// open the modyfire bar when tht timer pass certain number
  React.useEffect(()=>{
      if(timer > 6){
        props.setModificationMode(true);
        setTimer(0);
      }
    })
// implementing masonry liberay fo our elements layout
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
          isHeld={item.isHeld}
          isFavorite={item.isFavorite}
          modificationMode={props.modificationMode}
          startTimer={startTimer}
          stopTimer={stopTimer}
          selectElement={selectElement}
          changeTheme={changeTheme}
          changeTextColor={changeTextColor}
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
          isHeld={item.isHeld}
          isFavorite={item.isFavorite}
          date={item.date}
          shortDate={item.shortDate}
          modificationMode={props.modificationMode}
          startTimer={startTimer}
          stopTimer={stopTimer}
          selectElement={selectElement}
          changeTheme={changeTheme}
          changeTextColor={changeTextColor}
        />
      );
    }
  });

  return (
    <div>
      <div style={{ backgroundColor: props.message.color }} className="message">
        {props.message.text}
      </div>
      {/* all of our elements */}
      <div className={`home-notes ${props.darkMode ? "dark" : ""}`}>
        {elements}
      </div>
    </div>
  );
}
