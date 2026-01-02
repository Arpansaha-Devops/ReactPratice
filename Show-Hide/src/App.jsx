import { useState } from 'react'


function App() {
  const [visible, setVisible] = useState(true)

 


  return (
    <>
    <div>
  {visible &&  <div style={{height : "200px", width: "200px", border: "2px solid black"}} > this is a div</div> }
    </div>
    <button onClick={() => setVisible(!visible)} style={{position:"absolute", top: "35%",padding: "0.85rem 2rem" , borderRadius:"1rem"}} >{visible ? "Hide" : "Show"}  </button>
    

    </>
  )
}

export default App
