import React from 'react'
import Nav from './elementsListComponenet/Nav'
import Sidebar from './elementsListComponenet/Sidebar';
import Notes from './elementsListComponenet/Notes';

export default function ElementsList(props) {
  return (
    <div>
    <Nav
    openRelativeEditor = {props.openRelativeEditor}
     />
    <Notes />
    <Sidebar />
    </div>
  )
}
