import { useState } from 'react'
import './App.css'

function App() {
  const productRef = useRef()

  const handleAdd = (e) => {
    console.log(productRef.current.value)
  }

  return(
    <>
      <div>Product Name:</div>
      <div><input type="text" ref={productRef}/></div>
      <div>
        <butoon onClick={handleAdd}>Add</butoon>
      </div>
    </>
  )
}

export default App
