import { useState } from 'react'

import './App.css'

function App() {
  
  let [counter, setCounter] = useState(0)

  let increase = () => {
    if(counter<20){
      setCounter(counter + 1)
    }
    }
    
 
  let decrease = () => {
    if(counter>0){
      setCounter(counter - 1)
    }
    
  }

  return (
    <>
      <h1>Counter App</h1>
      <div>Counter : {counter}</div>
      <button onClick={increase}>Increase</button>
      
      <button onClick={decrease}>Decrease</button>
    </>
  )
}

export default App
