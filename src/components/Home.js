import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {BsSun, BsMoon} from 'react-icons/bs'
import {AiOutlineFileAdd} from 'react-icons/ai'

export default function Home() {
  return (
    <div className='home dark'>
        <nav className="home-nav dark">
            <h2 className="home-nav__title dark">notes</h2>
            <button className="home-nav__btn"><span className="mobile"><AiOutlineFileAdd /></span></button>
            <div className="home-nav__search-container dark">
                <input className='dark' type="text" placeholder='Search for your note'/>
                <span className="search-icon"><FiSearch /></span>
            </div>
            <div className="home-nav__theme-switcher">
                <div className="default-mode "><BsSun /></div>
                <div className="dark-mode active "><BsMoon /></div>
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
