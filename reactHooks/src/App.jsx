import React from 'react'
import { useState } from 'react'

const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1)
  }

  const decrement = () => {
    setCount(count - 1)
  }

  const reset = () => {
    setCount(0)
  }

  if(count < 0){
    setCount(0)
  }

  return (
   <div className='mainContainer'>
   <div className='container'>
    <h2>React Hooks</h2>
    <h2>Counter :  {count}</h2>

    <div className='btnDiv'>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement </button>
      <button onClick={reset}>Reset</button>
    </div>
   </div>
    </div>
  )
}

export default App