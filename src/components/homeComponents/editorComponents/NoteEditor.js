import React from 'react'

export default function NoteEditor() {
  

  const [data, setData] = React.useState('')
  const [height, setHeight] = React.useState()
  
  const style ={
    height : height
  }
  function handleChange(e){
    document.querySelector('textarea').style.height = 'auto';
    setData(e.target.value)
    setHeight(e.target.scrollHeight)
  }

  return (
    <div>
    <textarea
    onChange={handleChange} 
    value={data.value}
    style={style}
    placeholder='Type your note here...'>   
    </textarea>
    </div>
  )
}
