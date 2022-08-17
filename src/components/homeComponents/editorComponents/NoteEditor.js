import React from 'react'
import { IoIosArrowBack, IoMdMore } from 'react-icons/io'
import { FiShare } from 'react-icons/fi'

export default function NoteEditor() {
  return (
    <div>
        <div className="editor-nav">
            <div className="back-to-home">
                <span className='back-to-home__icon'><IoIosArrowBack /></span>
                <span>Home</span>
            </div>
            <div className="more-container">
                <div className="share">
                    <FiShare />
                </div>
                <div className="more">
                    <IoMdMore />
                </div>
            </div>
        </div>
        <div className="editor-main">
            <h2 className="title">title</h2>
            <span className="date"></span>
            <div className="body"></div>
        </div>
        <div className="editor-footer">
            <div className="theme"></div>
        </div>
    </div>
  )
}
