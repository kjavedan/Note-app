import React from 'react'
import ToDoEditor from './editorBodyComponents/ToDoEditor';
import NoteEditor from './editorBodyComponents/NoteEditor';

export default function EditorBody(props) {

  // close other open state such as more btn theme btn when the user try to type something
  function closeOpenStates() {
    props.setOpenOptions(false);
    props.setOpenTheme(false);
  }
  // change the title of the element
  function changeTitle(e) {
    props.setElementData({ ...props.elementData, title: e.target.value });
  }

  return (
    <div onClick={closeOpenStates} className="editor-main">

        {/* editor message */}
        <div
          style={{ backgroundColor: props.editorMessage.color }}
          className={`editor-main__message`}
        >
          {props.editorMessage ? props.editorMessage.message : ""}
        </div>

        {/* editor title */}
        <textarea
          placeholder="Title"
          type="text"
          className={`title ${props.darkMode ? "dark" : ""}`}
          value={props.elementData.title}
          onClick={closeOpenStates}
          onChange={changeTitle}
          disabled={props.heldCategory === 'deleted' ? true : false}
        ></textarea>

        {/* date tag under the title */}
        <span
          onClick={closeOpenStates}
          className={`date ${props.darkMode ? "dark" : ""}`}
        >
          {props.elementData.date}
        </span>

        {/* editor body */}
        <div
          onClick={closeOpenStates}
          className={`body ${props.darkMode ? "dark" : ""}`}
        >
        {/* the body of the editor is different for note and todo
        therefore open it base on the element category */}
          {props.editorType === "note" ? (
            <NoteEditor
              setElementData={props.setElementData}
              elementData={props.elementData}
              body={props.elementData.body}
              setEditorMessage={props.setEditorMessage}
              darkMode={props.darkMode}
              
            />
          ) : (
            <ToDoEditor
              setElementData={props.setElementData}
              elementData={props.elementData}
              tasks={props.elementData.tasks}
              setEditorMessage={props.setEditorMessage}
              darkMode={props.darkMode}
            />
          )}
        </div>
      </div>
  )
}
