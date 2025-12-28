import { useState } from 'react'
import Tabledata from './Tabledata'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Tabledata />
    </>
  )
}

export default App
