import React from 'react'
import Editor from './homeComponents/Editor'
import ElementsList from './homeComponents/ElementsList'
export default function Home() {

  // state to open the editor
  const [openEditor, setOpenEditor] = React.useState(true)
  
  // state to open the relative editor
  const [editorType, setEditorType] = React.useState()


   function openRelativeEditor(type){
   setEditorType(type)
   setOpenEditor(prevState => !prevState)
}

  return (
    <div className='home'>
    {openEditor 
    ? 
    <Editor
    editorType = {editorType}
     />
    : 
    <ElementsList
    openRelativeEditor = {openRelativeEditor}
     />
    }  
    </div>
  )
}
