import React from 'react'
import Home from './components/Home'
import Start from './components/Start'
export default function App() {

  const [start, setStart] = React.useState(true)
  return (
    <div className='container dark'>
    <main>
    {start 
    ? 
    <Home />
    :
    <Start
    setStart = {setStart}
     />
    }
    </main>
    </div>
  )
}
