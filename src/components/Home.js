import React from 'react'

export default function Home() {
  return (
    <div className='home'>
        <nav className="home-nav">
            <h2 className="home-nav__title">Notes</h2>
            <button className="home-nav__btn">Create <span className="icon"></span></button>
            <div className="home-nav__search-container">
                <input type="text" placeholder='Search for your note'/>
                <span className="search-icon"></span>
            </div>
            <div className="home-nav__theme-switcher">
                <div className="defaule-mode"></div>
                <div className="dark-mode"></div>
            </div>
        </nav>
        <div className="home-notes">
            <div className="home-notes__note">
                <h4 className="note-title">Title</h4>
                <p className="note-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, atque!</p>
                <div className="note-info">
                    <span className="note-date">Jan 17</span>
                    <span className="note-category">Note</span>
                </div>
            </div>
        </div>
        <div className="home-sidebar">
            <div className="home-sidebar__menu"></div>
        </div>
    </div>
  )
}
