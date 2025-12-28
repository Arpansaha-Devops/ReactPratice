import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [user, setUser] = useState({
  name :"arpan",
  city : "newyork",
  address : {
    country : "America",
    Age : 25
  }
  })

function handelUser(val) {
  setUser(prevUser => ({
    ...prevUser,
    name: val
  }));
}

function handleCountry(add) {
 setUser(prev => ({
    ...prev,
    address: {
      ...prev.address,
      country: add
    }
  }));
}


  return (
    <>
     <input type="text" placeholder='Update name' onChange={(e) => handelUser(e.target.value)} />
     <input type="text" placeholder='Update country' onChange={(e) => handleCountry(e.target.value)} />
     
     <h2>  Name : {user.name}</h2>
     <h2>  country : {user.address.country}</h2>
    </>
  )
}

export default App
