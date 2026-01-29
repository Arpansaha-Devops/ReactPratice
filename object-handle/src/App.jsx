import { useState } from 'react'

import './App.css'

function App() {
 
  const [cars,setCars] = useState({name : "porsche" ,Model: 911 , year:2019 })



const handleYear = (e) => {
  setCars(c => ({...c, year : e.target.value}))
}

const handleName = (e) => {
  setCars(c => ({...c, name : e.target.value}))
}

const handleModel = (e) => {
  setCars(c => ({...c, Model : e.target.value}))
}


  return (
    <>
     <div>
     <p>The name of my car is : {cars.name} - {cars.Model} - {cars.year}  </p>
     <input type="text"  value={cars.name} onChange={handleName} /><br />
      <input type="number"  value={cars.year} onChange={handleYear} /> <br />
      <input type="text"  value={cars.Model} onChange={handleModel}   /><br />
      
     </div>
    </>
  )
}

export default App
