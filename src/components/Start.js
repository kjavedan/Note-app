import React from 'react'
import {ReactComponent as NoteBook} from '../Images/noteBook.svg'

export default function Start() {
  return (
    <div className='start'>
    <NoteBook className='start__img' />
    <h2 className="start__title">Daily Notes</h2>
    <p className="start__subtitle">Take notes & set targets To Do</p>
    <button className="start__btn">Get Started</button>
    </div>
  )
}
