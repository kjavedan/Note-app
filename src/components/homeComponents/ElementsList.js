import React from "react";
import Nav from "./elementsListComponenet/Nav";
import Modyfire from "./elementsListComponenet/Modyfire";
import Sidebar from "./elementsListComponenet/Sidebar";
import Notes from "./elementsListComponenet/Notes";

export default function ElementsList(props) {
  // the elements list component is responsible for many things
  // 1. <Nav/> ->firing the createElement method from the nav in order to create new element
  // 2. <Modyfire/> -> modyfing the main state (delete, add to favorite, add to pass and change theme)
  // 3. <Notes/> -> display the received elements from mainState and display them on the screen
  ///4. <Sidebar/> -> display elements base on certain conditions for instance different categories

  // state for holding certain categories in the sidebar 
  const [heldCategory, setHeldCategory] = React.useState('recent');

  // pass the filtered state base on the selected category to be displayed
  const [filteredState, setFilteredState] = ([filterElements()])

  // iterate over main state and return the selected category elements
  function filterElements(){
     return props.mainState.filter(element => {
      if(heldCategory === 'recent'){
        return element
      }
      else if(heldCategory === 'favorite' && element.isFavorite){
        return element
      }
      else if(heldCategory === 'pass' && element.isPassword){
        return element
      }
      else if(heldCategory === 'note' && element.category === 'note'){
        return element
      }
      else if(heldCategory === 'todo' && element.category === 'todo'){
        return element
      }
      else if(heldCategory === 'all'){
        // call function to sort element base on creation date
      }
      else if(heldCategory === 'deleted'){
         console.log('display deleted elements')
      }
     })
  }
  
  return (
    <div>
      <Nav
      darkMode={props.darkMode}
      setDarkMode={props.setDarkMode}
      createElement={props.createElement}
      />
      <Modyfire
      darkMode={props.darkMode}
      mainState={props.mainState}
      setMainState={props.setMainState}
      modificationMode={props.modificationMode}
      setModificationMode={props.setModificationMode}
       />
      <Notes
      darkMode={props.darkMode}
      filteredState={filteredState}
      setMainState={props.setMainState}
      openClickedElement={props.openClickedElement}
      message={props.message}
      modificationMode={props.modificationMode}
      setModificationMode={props.setModificationMode}
      />
      <Sidebar 
      darkMode={props.darkMode} 
      mainState={props.mainState} 
      modificationMode={props.modificationMode}
      setModificationMode={props.setModificationMode}
      heldCategory={heldCategory}
      setHeldCategory={setHeldCategory}
      />
    </div>
  );
}
