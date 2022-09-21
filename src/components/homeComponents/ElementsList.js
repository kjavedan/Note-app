import React, {useState, useEffect} from "react";
import Nav from "./elementsListComponenet/Nav";
import Modyfire from "./elementsListComponenet/Modyfire";
import Sidebar from "./elementsListComponenet/Sidebar";
import Notes from "./elementsListComponenet/Notes";

export default function ElementsList(props) {
  // the elements list component is responsible for many things
  // 1. <Nav/> ->firing the createElement method from the nav in order to create new element
  // 2. <Modyfire/> -> modyfing the main state (delete, add to favorite, add to pass and change theme)
  // 3. <Notes/> -> display the received elements from mainState and display them on the screen after aplying filttering
  ///4. <Sidebar/> -> display elements base on certain conditions for instance different categories

  // pass the filtered state base on the selected category to be displayed
  const [filteredState, setFilteredState] = useState(filterElements())

 // set filtered state when ever the held category changes or the states values change
  useEffect(()=>{
    setFilteredState(filterElements())
  },[props.heldCategory, props.mainState, props.recyclebin])
 
  // remove the home notification after 2 second
  React.useEffect(()=>{
    setTimeout(()=>{
      props.setMessage({})
    },2000)
  },[props.message])

  // iterate over main state and return the selected category elements
  function filterElements(){
    // sort element by date
      if(props.heldCategory === 'all'){
        return([...props.mainState].sort((objA, objB) => objA.time - objB.time))
      } 
      else if(props.heldCategory === 'deleted'){
         return props.recyclebin
      }
      else{
        return props.mainState.filter(element => {
      if(props.heldCategory === 'recent'){
        return element
      }
      else if(props.heldCategory === 'favorite' && element.isFavorite){
        return element
      }
      else if(props.heldCategory === 'pass' && element.isPassword){
        return element
      }
      else if(props.heldCategory === 'note' && element.category === 'note'){
        return element
      }
      else if(props.heldCategory === 'todo' && element.category === 'todo'){
        return element
      }})
    }
  }
  
  return (
    <div>
      <Nav
      darkMode={props.darkMode}
      setDarkMode={props.setDarkMode}
      createElement={props.createElement}
      setFilteredState={setFilteredState}
      filterElements={filterElements}
      />
      <Modyfire
      darkMode={props.darkMode}
      mainState={props.mainState}
      setMainState={props.setMainState}
      modificationMode={props.modificationMode}
      setModificationMode={props.setModificationMode}
      recyclebin={props.recyclebin}
      setRecyclebin={props.setRecyclebin}
      message={props.message}
      setMessage={props.setMessage}
      heldCategory={props.heldCategory}
       />
      <Notes
      darkMode={props.darkMode}
      filteredState={filteredState}
      setMainState={props.setMainState}
      openClickedElement={props.openClickedElement}
      message={props.message}
      modificationMode={props.modificationMode}
      setModificationMode={props.setModificationMode}
      heldCategory={props.heldCategory}
      recyclebin={props.recyclebin}
      setRecyclebin={props.setRecyclebin}
      />
      <Sidebar 
      darkMode={props.darkMode} 
      mainState={props.mainState} 
      modificationMode={props.modificationMode}
      setModificationMode={props.setModificationMode}
      heldCategory={props.heldCategory}
      setHeldCategory={props.setHeldCategory}
      filterElements={filterElements}
      />
    </div>
  );
}
