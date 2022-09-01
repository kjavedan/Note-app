import React from 'react'

export default function Modyfire(props) {
  return (
    <div className={`home-modyfire ${props.modificationMode ? 'open' : ''}`}>
        <div className="modyfire-btns">
            <button className="add-to-passwords"></button>
            <button className="add-to-favorite"></button>
            <button className="change-theme"></button>
            <button className="delete"></button>
        </div>
        <div className="modyfire-left">
            <span className="counter">1</span>
            <button className="close-modyfire"></button>
        </div>
    </div>
  )
}
