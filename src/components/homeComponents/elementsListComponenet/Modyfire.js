import React from 'react'
import RecyclebinModyfire from './modyfireComponents/RecyclebinModyfire';
import RegularyModyfire from './modyfireComponents/RegularyModyfire';

export default function Modyfire(props) {
 
  
  return(
    <div className={`home-modyfire ${props.darkMode ? 'dark' : ''} ${props.modificationMode ? 'open' : ''}`}>
      {props.heldCategory !=='deleted' ?
      <RegularyModyfire
        darkMode={props.darkMode}
        mainState={props.mainState}
        setMainState={props.setMainState}
        modificationMode={props.modificationMode}
        setModificationMode={props.setModificationMode}
        setRecyclebin={props.setRecyclebin}
        message={props.message}
        setMessage={props.setMessage}
      /> :
      <RecyclebinModyfire
      darkMode={props.darkMode}
      mainState={props.mainState}
      setMainState={props.setMainState}
      modificationMode={props.modificationMode}
      setModificationMode={props.setModificationMode}
      setRecyclebin={props.setRecyclebin}
      message={props.message}
      setMessage={props.setMessage}
      />
    }
    </div>
  )
}
