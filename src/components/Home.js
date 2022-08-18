import React from 'react'
import Masonry from 'masonry-layout'
import Editor from './homeComponents/Editor'
import ElementsList from './homeComponents/ElementsList'
export default function Home() {

  const [darkMode, setDarkMode] = React.useState(false)

  // state to open the editor
  const [openEditor, setOpenEditor] = React.useState(true)
  
  // state to open the relative editor
  const [editorType, setEditorType] = React.useState()


   function openRelativeEditor(type){
   setEditorType(type)
   setOpenEditor(prevState => !prevState)
}

  return (
    <div className={`home ${darkMode ? 'dark' : ''}`}>
    {openEditor 
    ? 
    <Editor
    darkMode = {darkMode}
    editorType = {editorType}
    openEditor = {setOpenEditor}
     />
    : 
    <ElementsList
    darkMode = {darkMode}
    setDarkMode = {setDarkMode}
    openRelativeEditor = {openRelativeEditor}
     />
    }  
    </div>
  )
}
