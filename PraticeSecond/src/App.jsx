import { useState } from 'react'
import { Student } from './student'

function App() {
 
const [count,setCount] = useState(0)

const [index,setIndex] = useState(-1)

const arr = ["arpan","Tanmoy","Messi","Ronaldo"]


function changeStudentname() {
  setIndex(index => index < arr.length - 1 ? index + 1 : index)
}
function removename(){
  setIndex(prev => (prev > -1 ? prev - 1 : -1));
}

  return (
    <>
    {/* <Student  name= {"arpan"} /> */}
      <h1>Hello World :{count}</h1>
      <button style={{margin : "0px 10px" }} onClick={() => count < 10 && setCount(prev => prev + 1)}>increase count</button>
      <button onClick={() => count > 0 && setCount(prev => prev - 1)}>decrease count</button>
      <br />
      <br />
      <br />
      <br />

 {index !== -1 && <Student name={arr[index]} />}  
      <button onClick={changeStudentname} >change</button>
      <button onClick={removename} >change</button>
      
    </>
  )
}

export default App
