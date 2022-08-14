import React from 'react'
import {FiSearch} from 'react-icons/fi'
import {BsSun, BsMoon} from 'react-icons/bs'
import {AiOutlineFileAdd} from 'react-icons/ai'

export default function Nav() {
  return (
     <nav className="home-nav">
            <h2 className="home-nav__title">notes</h2>
            <button className="home-nav__btn"><span className="mobile"><AiOutlineFileAdd /></span></button>
            <div className="home-nav__search-container">
                <input className='' type="text" placeholder='Search for your note'/>
                <span className="search-icon"><FiSearch /></span>
            </div>
            <div className="home-nav__theme-switcher">
                <div className="default-mode "><BsSun /></div>
                <div className="dark-mode active "><BsMoon /></div>
            </div>
        </nav>
  )
}
