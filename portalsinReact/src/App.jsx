import { useState } from 'react'
import Child from './Child'


function App() {
const [first, setfirst] = useState(false)

  return (
    <>
      <h1>App Component</h1>

      <button onClick={() => setfirst(prev => !prev)} > Click Me </button>

      {first && <Child onClose={() => setfirst(prev => !prev)} >
       
       <h1>hello i have complete react advanced Topics ! 😈 </h1>   // this is the children props which we are pasing into the child component

      </Child> }

    </>
  )
}

export default App
