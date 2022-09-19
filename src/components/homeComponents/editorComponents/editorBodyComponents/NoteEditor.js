import React from "react";

export default function NoteEditor(props) {
  const [height, setHeight] = React.useState();

  const style = {
    height: height,
  };

  function handleChange(e) {
    document.querySelector("textarea").style.height = "auto";
    props.setElementData({ ...props.elementData, body: e.target.value });
    setHeight(e.target.scrollHeight);
  }

  return (
    <div>
      <textarea
        className={props.darkMode ? "dark" : ""}
        onChange={handleChange}
        value={props.body}
        style={style}
        placeholder={props.heldCategory === 'deleted' ? 'You can not edit in the recyclebin, Sorry :(' : "Type your note here..."}
        disabled={props.heldCategory === 'deleted' ? true : false}
      ></textarea>
    </div>
  );
}
