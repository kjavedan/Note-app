import React from 'react'
import {MdRestore} from 'react-icons/md'
import {FiTrash} from 'react-icons/fi'

export default function RecyclebinFootter(props) {

    console.log(props.elementData)
    
  return (
    <div className='recyclebin-container'>
        <button className='restore'>
            <MdRestore />
        </button>
        <button className='delete'>
            <FiTrash />
        </button>
    </div>
  )
}
