import React, { useState } from 'react'

const App = () => {
  const [car , setCar] = useState({
    name:"BMW",
    model:"X5",
    year:2020
  })
  return (
    <div className='flex items-center justify-center h-screen flex-col gap-4'>

      <h1>{car.name}</h1>
      <h2>{car.model}</h2>
      <h3>{car.year}</h3>
      // To update the state of an object, we need to spread the previous state and then update the specific property we want to change.  
      <button onClick={() => setCar({...car, name:"Mercedes"})} className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer'>
        Change Car Name
      </button>
    </div>
  )
}

export default App