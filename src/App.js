import React from 'react'
import Home from './components/Home'
import Start from './components/Start'
export default function App() {

  
  const [mainState, setMainState] = React.useState(
    JSON.parse(localStorage.getItem('notes')) || []
    );
    
    React.useEffect(()=>{
      localStorage.setItem('notes',JSON.stringify(mainState))
    },[mainState])
    
    const [start, setStart] = React.useState(mainState.length ? true : false)

  return (
    <div className='container'>
    <main>
    {start 
    ? 
    <Home
    mainState={mainState}
    setMainState={setMainState}
     />
    :
    <Start
    setStart = {setStart}
     />
    }
    </main>
    </div>
  )
}