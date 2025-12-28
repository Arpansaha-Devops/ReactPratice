import { useId } from "react"


function App() {
 

  return (
    <>
  <Userform />
  <Userform />

    </>
  )
}

export default App


function Userform() {
  const name = useId()

  return (
    <>
    <form action="">

<label htmlFor={name}>Username </label>
<input type="text" id={name} placeholder="Enter name" />

    </form>
    </>
  )
}



