import { useState } from 'react'
import Collages from './Ages'



function App() {

  const [color,setColor] = useState("red")

  const users = [
    {name : "Arpan",
      age : 20,
      id : 1,
      gmail : "arrpansaha@gmail.com",
      collage : ["MIT"]
  },
    {name : "Tanmoy",
      age : 20,
       id : 2,
      gmail : "Tanmoy@gmail.com",
      collage : ["JIT"]
  },
    {name : "Messi",
      age : 20,
       id : 3,
      gmail : "Messi@gmail.com",
      collage : ["BIT"]
  },


]

  
  return (
    <>

    <select  value={color} onChange={(e) => {
      setColor(e.target.value)
    }}  >
   
   <option value="red"  > red </option>
   <option value="green"> green </option>
   <option value="blue"> blue </option>

    </select>
     {
      users.map((items) => (
        <div key={items.id} >
        <h2 style={{color}} >Name : {items.name}</h2>
        <p>Gmail : {items.gmail}</p>

<Collages colleges={items.collage} />

        </div>
      ))
     }
    </>
  )
}

export default App
