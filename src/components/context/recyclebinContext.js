import React from 'react'

const RecyclebinContext = React.createContext()

function RecyclebinProvider(props) {

// state to tell us in which state(mainState or recyclebin) we should look for the clicked element
  const [isRecylebin, setIsRecyclebin] = React.useState(false);

  function toggleRecyclebin(){
    setIsRecyclebin(prevState => !prevState)
  }
  return (
    <RecyclebinContext.Provider value={{isRecylebin, toggleRecyclebin}}>
        {props.children}
    </RecyclebinContext.Provider>
  )
}

export {RecyclebinProvider, RecyclebinContext}