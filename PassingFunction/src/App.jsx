import { useState } from 'react'
import User from './User'

function App() {
 

  const showalert = function (name) {
    alert(`hello ${name}`)
  }

  return (
    <>
    <User displayAlert={showalert} name={undefined} />
    </>
  )
}

export default App
