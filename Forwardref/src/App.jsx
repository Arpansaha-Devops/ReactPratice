import { useRef, useState } from 'react'
import User from './User'


function App() {

  const inptRef = useRef(null)

  const handleref = () => {
    inptRef.current.focus()
    inptRef.current.style.color = "red"
  }

  return (
    <>
    <h1>Use of Forward ref hook </h1>
    <User ref={inptRef}  works={handleref} />

   
    </>
  )
}

export default App
