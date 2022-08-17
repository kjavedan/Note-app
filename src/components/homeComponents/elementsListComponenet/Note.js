import React from 'react'

export default function Note(props) {
  return (
     <div className={`home-notes__note ${props.darkMode ? 'dark' : ''}`}>
                <h4 className={`note-title ${props.darkMode ? 'dark' : ''}`}>Title</h4>
                <p className={`note-text ${props.darkMode ? 'dark' : ''}`}> consectetur adipisicing elit. Ab, atque! ...</p>
                <div className={`note-info ${props.darkMode ? 'dark' : ''}`}>
                    <span className="note-date">Jan 17</span>
                    <span className="note-category">Note</span>
                </div>
            </div>
  )
}
