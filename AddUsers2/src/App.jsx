import { useState } from 'react'

function App() {
 const [Cars, setCars] = useState([])
 const [Model, setModel] = useState("")
 const [Year, setYear] = useState("")
 const [Make, setMake] = useState("")


function handleAddcars() {
  
let newCars = {Model :Model, Year : Year, Make : Make}

setCars(prev => ([...prev,newCars]))
setMake("")
setModel("")
setYear("")

}
function removeCar() {
  setCars(prevCars => prevCars.slice(0, -1))
}

  return (
    <>
     
   <h1>Add & Remove Cars -</h1>
<input type="text" value={Model} placeholder='Enter Model' onChange={(event) => setModel(event.target.value)} /> <br />
<input type="text" value={Make} placeholder='Enter Make' onChange={(e) => setMake(e.target.value)} /> <br />
<input type="number" value={Year} placeholder='Enter Year' onChange={(e) => setYear(e.target.value)} /> <br />

<button onClick={handleAddcars} >Add Car </button>
 <button onClick={() => removeCar()}>  Remove </button>

<ul>

{
Cars.map((item,index) => (
  <li key={index}  > {item.Make} - {item.Year} - {item.Model}  </li>
))
}

</ul>

    </>
  )
}

export default App
