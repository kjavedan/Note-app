import React from 'react'
import { IoIosArrowBack, IoMdMore } from 'react-icons/io'
import { FiShare } from 'react-icons/fi'
import { MdOutlineColorLens } from 'react-icons/md'

export default function NoteEditor(props) {

    const [openTheme, setOpenTheme] = React.useState(false)

    function handleTheme(){
        setOpenTheme(prevTheme => !prevTheme)
    }

  return (
    <div>
        <div className={`editor-nav ${props.darkMode ? 'dark' : ''}`}>
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
            <h2 className={`title ${props.darkMode ? 'dark' : ''}`}>title</h2>
            <span className={`date ${props.darkMode ? 'dark' : ''}`}>January 21. 18:24 Tuesday | 325 words</span>
            <div className={`body ${props.darkMode ? 'dark' : ''}`}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi, culpa numquam nesciunt, repudiandae magnam autem quasi dicta illo nobis, doloribus deleniti amet architecto! Fugiat, magni maxime mollitia deleniti obcaecati aspernatur.</div>
        </div>
        <div className={`editor-footer ${props.darkMode ? 'dark' : ''}`}>
            <div 
            className="theme-btn"
            onClick={handleTheme}
            >
                <MdOutlineColorLens />
            </div>
            <div className="theme-container">
                <span className={`color color-1 ${openTheme ? 'show' : ''}`}></span>
                <span className={`color color-2 ${openTheme ? 'show' : ''}`}></span>
                <span className={`color color-3 ${openTheme ? 'show' : ''}`}></span>
                <span className={`color color-4 ${openTheme ? 'show' : ''}`}></span>
                <span className={`color color-5 ${openTheme ? 'show' : ''}`}></span>
            </div>
        </div>
    </div>
  )
}
