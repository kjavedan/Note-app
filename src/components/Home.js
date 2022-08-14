import React from 'react'
import Nav from './homeComponents/Nav'
import Sidebar from './homeComponents/Sidebar';
import Notes from './homeComponents/Notes';

export default function Home() {

  return (
    <div className='home'>
       <Nav />
       <Notes />
       <Sidebar />
    </div>
  )
}
