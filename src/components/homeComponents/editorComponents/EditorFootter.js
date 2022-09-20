import React from 'react'
import RegularFootter from './editorFootterComponents/RegularFootter';
import RecyclebinFootter from './editorFootterComponents/RecyclebinFootter';

export default function EditorFootter(props) {

 
  return (
    <div className={`editor-footer ${props.darkMode ? "dark" : ""}`}>
        {props.heldCategory ==='deleted' ?
        <RecyclebinFootter
        darkMode={props.darkMode}
        elementData={props.elementData}
        setOpenEditor={props.setOpenEditor}
        setMainState={props.setMainState}
        setRecyclebin={props.setRecyclebin}
        setMessage={props.setMessage}
        /> :
        <RegularFootter 
        elementData={props.elementData} 
        setElementData={props.setElementData}
        openTheme={props.openTheme}
        setOpenTheme={props.setOpenTheme}
        setOpenOptions={props.setOpenOptions}
        />}
     </div>
  )
}
