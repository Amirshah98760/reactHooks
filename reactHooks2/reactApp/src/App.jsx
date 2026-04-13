import React, { useState } from 'react'

const App = () => {
  const [text, setText] = useState("Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.")
  const [isTextVisible, setIsTextVisible] = useState(true)
  const [car , setCar] = useState({
    name:"BMW",
    model:"X5",
    year:2020
  })

const [count , setCount] = useState(0);
console.log(count)
function increment(){
  setCount(count + 1);
}

function decrement(){
  setCount(count - 1);
}

if(count < 0){
  setCount(0);
  alert("Count cannot be negative");
}

  return (
    <div className='flex items-center justify-center h-screen flex-col gap-4'>

      <h1>{car.name}</h1>
      <h2>{car.model}</h2>
      <h3>{car.year}</h3>
      // To update the state of an object, we need to spread the previous state and then update the specific property we want to change.  
      <button onClick={() => setCar({...car, name:"Mercedes"})} className='bg-blue-500 text-white py-2 px-4 rounded cursor-pointer'>
        Change Car Name
      </button>


      <div className='border-2 rounded p-5 border-gray-500'>
        <h1 className='text-2xl mb-4 text-center'>Count {count}</h1>
       <div>
         <button onClick={increment} className='bg-green-500 text-white py-2 px-4 rounded cursor-pointer'>
          Increment
        </button>
        <button onClick={decrement} className='bg-red-500 text-white py-2 px-4 rounded cursor-pointer ml-4'>
          Decrement
        </button>
        <button onClick={() => setCount(0)} className='bg-yellow-500 text-white py-2 px-4 rounded cursor-pointer ml-4'>
          Reset
        </button>
       </div>
      </div>

      <div className='border-2 rounded p-5 border-gray-500 w-2xl'>
        {isTextVisible && <p className='text-lg text-center'>{text}</p>}
        <button className='bg-gray-500 text-white py-2 px-4 rounded cursor-pointer mt-4'
       onClick={() => setIsTextVisible((prev) => !prev)}
        >
          {isTextVisible ? "Hide Text" : "Show Text"}
        </button>
      </div>
    </div>
  )
}

export default App    