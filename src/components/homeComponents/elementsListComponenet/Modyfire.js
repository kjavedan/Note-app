import React from 'react'
import RecyclebinModyfire from './modyfireComponents/RecyclebinModyfire';
import RegularModyfire from './modyfireComponents/RegularModyfire';

export default function Modyfire(props) {

    // state to determaine the sellectall btn wheather it should select or deSelect
    const [selectedAll, setSelectedAll] = React.useState(false)

    // select all elements when its clicked
    function selectAll(setState){
      setSelectedAll(true)
      toggleAllProperties(setState,'isHeld', true)
    }
  
    // deSelect All item when its clicked
    function deSelectAll(setState){
      setSelectedAll(false)
      toggleAllProperties(setState,'isHeld', false)
    }
  
    // function used different places to toggle the given prperty name to the given value
    function toggleAllProperties(setState, propertyName , toggleTo){
      setState(prevState => {
        return prevState.map(element => {
          return {...element , [propertyName] : toggleTo}
        })
      })
    }
  
    // close the modyfire page when its clicked
    function closeModyfire(stateName){
      props.setModificationMode(false);
      toggleAllProperties(stateName,'isHeld', false)
    }

  function counter(state){
    let count = 0;
   state.forEach(element =>{
      if(element.isHeld){
        count++;
      }
    })
    return count;
  }
 
  // remove notification after 2 second
  React.useEffect(()=>{
    setTimeout(()=>{
      props.setMessage({})
    },2000)
  },[props.message])

  return(
    <div className={`home-modyfire ${props.darkMode ? 'dark' : ''} ${props.modificationMode ? 'open' : ''}`}>
      {props.heldCategory !=='deleted' ?
      <RegularModyfire
      darkMode={props.darkMode}
      mainState={props.mainState}
      setMainState={props.setMainState}
      modificationMode={props.modificationMode}
      setModificationMode={props.setModificationMode}
      setRecyclebin={props.setRecyclebin}
      message={props.message}
      setMessage={props.setMessage}
      counter={counter}
      closeModyfire={closeModyfire}
      selectedAll={selectedAll}
      selectAll={selectAll}
      deSelectAll={deSelectAll}
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
      counter={counter}
      recyclebin={props.recyclebin}
      closeModyfire={closeModyfire}
      selectedAll={selectedAll}
      selectAll={selectAll}
      deSelectAll={deSelectAll}
      />
    }
    </div>
  )
}
