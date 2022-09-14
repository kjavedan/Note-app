import React from "react";
import { FiSearch } from "react-icons/fi";
import { BsSun, BsMoon } from "react-icons/bs";
import { AiOutlineFileAdd } from "react-icons/ai";
import { TiTick } from "react-icons/ti";
import { MdAdd } from "react-icons/md";

// ------------------------

export default function Nav(props) {

  // state to show the create btns on click
  const [showBtns, setShowBtns] = React.useState(false);

  // toggle the create btns on the screen
  function toggleBtns() {
    setShowBtns((prevState) => !prevState);
  }
  // changing the entire app theme from the nav
  function changeTheme() {
    props.setDarkMode((prevState) => !prevState);
  }
  // searching for a specefic info
  function handleChange(e){
    const value = e.target.value.trim().toLowerCase();
    // resetting the filltered state after each change in the search bar
    props.setFilteredState(props.filterElements())
    // return any matching element
    props.setFilteredState(prevState => prevState.filter(element => {
      // if the title matches the entered input
      if(element.title.includes(value)) return element
      // if the note body matches the entered input
      else if(element.body && element.body.includes(value)) return element
      // if the task body in the tasks array of the todo element matches the entered input
      else if(element.category === 'todo' && element.tasks.filter(task => task.body.includes(value))[0]) return element
    }))
  }

  return (
    <nav className={`home-nav ${props.darkMode ? "dark" : ""}`}>
      <h2 className={`home-nav__title ${props.darkMode ? "dark" : ""}`}>
        notes
      </h2>
      <div className="home-nav__btns-container">
        {/* note btn */}
        <div className={`container ${showBtns ? "show" : ""}`}>
          <span
            className="create-note"
            onClick={() => props.createElement("note")}
          >
            <AiOutlineFileAdd />
          </span>
          Note
        </div>
        {/* todo btn */}
        <div className={`container ${showBtns ? "show" : ""}`}>
          <span
            className="create-todo"
            onClick={() => props.createElement("todo")}
          >
            <TiTick />
          </span>
          To Do
        </div>
        {/* create btn */}
        <div className="create-container">
          <span className="create" onClick={toggleBtns}>
            <MdAdd />
          </span>
        </div>
      </div>
      {/* search bar */}
      <div
        className={`home-nav__search-container ${props.darkMode ? "dark" : ""}`}
      >
        <input
          onChange={handleChange}
          className={props.darkMode ? "dark" : ""}
          type="text"
          placeholder="Search for anything"
        />
        <span className="search-icon">
          <FiSearch />
        </span>
      </div>
      {/* theme changer */}
      <div
        className={`home-nav__theme-switcher ${props.darkMode ? "dark" : ""}`}
        onClick={changeTheme}
      >
        <div className={`default-mode ${props.darkMode ? "dark" : ""} `}>
          <BsSun />
        </div>
        <div className={`dark-mode ${props.darkMode ? "dark" : ""} `}>
          <BsMoon />
        </div>
      </div>
    </nav>
  );
}
