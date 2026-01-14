import { useState,Activity } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [home, setHome] = useState(true)

function showhome() {
  setHome(prev => !prev)
}


  return (
    <>
    < Activity mode={home ? "visible" : "hidden"} >
    
    < Home />

    </Activity>
    < Activity mode={!home ? "visible" : "hidden"} >
    
    < Username />

    </Activity>

    <br />

   <button onClick={showhome} > Home </button>
    <button  onClick={showhome} > userForm </button>
    </>
  )
}


function Home() {
  return(
    <>
    
    <div>
      <h4>this is home div -</h4>
    </div>
    </>
  )
}
function Username() {
  return(
    <>
    
    <div>
      <h4>this is userName div --</h4>
      <div>
        <input type="text" placeholder='enter name' />
      </div>
    </div>
    </>
  )
}

export default App
