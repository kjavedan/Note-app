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

  // we will show elements dynamically from our state
  console.log(props.mainState)
  const elements = props.mainState.map(item =>{
    if(item.category === 'note'){
      return <Note key={item.id} darkMode = {props.darkMode} id={item.id} body={item.body} theme={item.theme} date={item.date} title={item.title} category={item.category} />
    }
    else{
      return <ToDo key={item.id} id={item.id} title={item.title} tasks={item.tasks} theme={item.theme} category={item.category} date={item.date} accomplishedTasks ={item.accomplishedTasks}  />
    }
  })
  console.log(elements)
  return (
    <div className={`home-notes ${props.darkMode ? "dark" : ""}`}>
      {elements}
    </div>
  );
}
