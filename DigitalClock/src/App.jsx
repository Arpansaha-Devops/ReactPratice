import { useState } from 'react'

import Digitalclock from './Clock'

function App() {
  const [color, setColor] = useState("red")

  return (
    <>
    <Digitalclock />
    </>
  )
}

export default App
