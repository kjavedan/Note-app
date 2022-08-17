import React from 'react'
import NoteEditor from './editorComponents/NoteEditor'
import ToDoEditor from './editorComponents/ToDoEditor'

export default function Editor(props) {

  console.log(props.editorType)
  
  return (
    <div className='editor'>
    {props.editorType === 'note' 
    ?
    <NoteEditor />
    :
    <ToDoEditor />
    }
    </div>
  )
}
