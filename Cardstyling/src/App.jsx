import { useState } from 'react'

function App() {

  const [color,setColor] = useState("")
  const [changetext,setChangetext] = useState("Change")

function changeColor() {
  setColor(prev => prev === "" ? "grey" : "")
  setChangetext(prev => prev === "Change" ? "Reset" : "Change")
}




  return (
    <>
      <h1>My Profile Card -</h1>

    <div style={{width:"12rem",border:"2px solid black",backgroundColor:color}} >
<div style={{display:"flex",justifyContent:"center",alignItems:"center",height:"150px"}} >
  <img  style={{width:"10rem"}} src="https://static.vecteezy.com/system/resources/thumbnails/053/733/179/small/every-detail-of-a-sleek-modern-car-captured-in-close-up-photo.jpg" alt="lamboimage" />
</div>
<p>Car Name : Lamborgini</p>
<p>Car Price : $300000</p>
    </div>


    <button  onClick={changeColor}>  {changetext} </button>
    </>
  )
}

export default App
