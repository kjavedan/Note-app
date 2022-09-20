import React from 'react'
import {MdRestore} from 'react-icons/md'
import {FiTrash} from 'react-icons/fi'

export default function RecyclebinFootter(props) {

    function deletePermanently(){
        props.setRecyclebin(prevState => {
            return prevState.filter(elemenet => {
                if(elemenet.id !== props.elementData.id){
                    return elemenet
                }
            })
        })
        props.setMessage({text:'Note removed permanently', color:'lightcoral'})
        props.setOpenEditor(false)
    }

    function restore(){
        props.setRecyclebin(prevState => {
            return prevState.filter(element => {
                if(element.id !== props.elementData.id){
                    return element
                }
                else{
                    props.setMainState(prevState => [element, ...prevState])
                }
            })
        })
        props.setMessage({text:'Note has been restored', color:'lightgreen'})
        props.setOpenEditor(false)
    }
    
  return (
    <div className='recyclebin-container'>
        <button 
        onClick={restore}
        className={`restore ${props.darkMode ? 'dark' : ''}`}>
            <MdRestore />
        </button>
        <button 
        onClick={deletePermanently}
        className={`delete ${props.darkMode ? 'dark' : ''}`}>
            <FiTrash />
        </button>
    </div>
  )
}
