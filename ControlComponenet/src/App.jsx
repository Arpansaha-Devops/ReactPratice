import { useState } from 'react'


function App() {
 const [name,setName] = useState("")
 const [password,setPassword] = useState("")
 const [gmail,setGmail] = useState("")

function remoVeitems() {
  setName("");
  setPassword("");
  setGmail('');
}


  return (
    <>
      <form action="" >

<input type="text" value={name} onChange={(e) => setName(e.target.value) } />
<li>{name}</li>
<input type="tel" value={password} onChange={(e) => setPassword(e.target.value) } />
<li>{password}</li>
<input type="gmail" value={gmail} onChange={(e) => setGmail(e.target.value) } />
<li>{gmail}</li>

      </form>

      <button onClick={remoVeitems} ></button>
    </>
  )
}

export default App
