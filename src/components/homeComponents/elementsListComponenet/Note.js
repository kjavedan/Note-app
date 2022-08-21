import React from 'react'

export default function Note(props) {
  return (
     <div className={`home-notes__note ${props.darkMode ? 'dark' : ''}`}>
                <h4 className={`note-title ${props.darkMode ? 'dark' : ''}`}>{props.title}</h4>
                <p className={`note-text ${props.darkMode ? 'dark' : ''}`}>{props.body}</p>
                <div className={`note-info ${props.darkMode ? 'dark' : ''}`}>
                    <span className="note-date">{props.date}</span>
                    <span className="note-category">{props.category}</span>
                </div>
            </div>
  )
}
