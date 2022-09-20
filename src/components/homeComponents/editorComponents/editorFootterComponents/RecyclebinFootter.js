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
        props.setMessage({text:'removed permanently', color:'lightcoral'})
        props.setOpenEditor(false)
    }
    
  return (
    <div className='recyclebin-container'>
        <button className='restore'>
            <MdRestore />
        </button>
        <button 
        onClick={deletePermanently}
        className='delete'>
            <FiTrash />
        </button>
    </div>
  )
}
