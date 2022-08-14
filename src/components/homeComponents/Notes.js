import React from 'react'
import Masonry from 'masonry-layout'
import Note from './Note';
import ToDo from './ToDo';

export default function Notes() {

     window.onload = ()=>{
        const grid = document.querySelector('.home-notes');
        console.log(grid)
        const masonry = new Masonry(grid, {
            itemSelector : '.home-notes__note',
            gutter : 10,
        })
    }

  return (
      <div className="home-notes">
           <Note />
           <ToDo />
        </div>
  )
}
