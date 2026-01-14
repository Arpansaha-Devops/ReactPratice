import { Suspense } from 'react'
import { lazy } from 'react'
import { useState } from 'react'
// import User from './User'


function App() {
  const CompoNent = lazy(() => import("./User"))
  const [count, setCount] = useState(false)

  return (
    <>
    <div>
{
  count ?  <Suspense fallback={<h3> Loading ... </h3>} > <CompoNent />   </Suspense> : null
}


    </div>
    <button onClick={() => setCount(prev => !prev)} > Load </button>
    </>
  )
}

export default App
