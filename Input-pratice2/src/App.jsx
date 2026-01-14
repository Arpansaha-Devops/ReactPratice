import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [name, setName] = useState('')
  const [user,setUser] = useState([])

  function addUser() {
    setUser([...user,name])
    setName("")
  }

  return (
    <>
     <label htmlFor="name">Name</label>
     <input type="text" placeholder='enter name' value={name}  onChange={(e) => setName(e.target.value)} />

<br /><br />
{
  user.map((item,index) => (
    <li key={index} >{item}</li>
  ))
}

     <button onClick={addUser} > Add user </button>
    </>
  )
}

export default App
